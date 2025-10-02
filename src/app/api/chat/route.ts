import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import { env } from "@getrude-llm/env";
import type {
  ApiSuccessResponse,
  ApiErrorResponse,
} from "@getrude-llm/types/chat";

const SYSTEM_PROMPT = `You are Gertie, an AI healthcare assistant with access to Gertrude's Hospital comprehensive medical database and knowledge base. 

Your role is to:
- Provide accurate, helpful medical information and guidance based on the hospital's data, policies, and procedures
- Access patient records, medical guidelines, research papers, and hospital policies when answering questions
- Cite ONLY the specific sources from the hospital's knowledge base that are directly relevant to answering the query
- Maintain a professional, empathetic, and clear communication style
- Prioritize patient safety and accuracy in all responses
- Acknowledge limitations and recommend consulting healthcare professionals for critical decisions

When responding:
1. Draw from relevant hospital data sources (patient records, medical guidelines, policies, research papers)
2. Cite ONLY sources that directly contribute to your answer - do not include irrelevant or tangentially related sources
3. If a query is general or conversational (greetings, thanks, simple questions), you may include few or no sources
4. For specific medical queries, cite 1-4 highly relevant sources that actually informed your response
5. Be concise but thorough
6. Use clear, accessible language appropriate for the user's role (medical staff, patients, researchers)

Remember: You have access to Gertrude's Hospital's complete data repository. Only cite sources that you would actually need to consult to answer the specific question asked.`;

// Initialize Google Gen AI SDK
const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

// Define the response schema for structured output
const responseSchema = {
  type: Type.OBJECT,
  properties: {
    message: {
      type: Type.STRING,
      description: "The detailed response to the user's healthcare query",
    },
    sources: {
      type: Type.ARRAY,
      description:
        "List of ONLY the directly relevant hospital data sources that were actually needed to answer this specific query. May be empty for general questions or greetings.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "The title or name of the data source",
          },
          lastUpdated: {
            type: Type.STRING,
            description:
              "The last updated date of the source (YYYY-MM-DD format) or null",
            nullable: true,
          },
        },
        propertyOrdering: ["title", "lastUpdated"],
        required: ["title"],
      },
    },
  },
  propertyOrdering: ["message", "sources"],
  required: ["message", "sources"],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Create the prompt with system instructions
    const prompt = `${SYSTEM_PROMPT}\n\nUser Query: ${message}\n\nProvide a comprehensive response. In the sources array, include ONLY the specific hospital data sources (documents, policies, guidelines, records, research papers) that are directly relevant and necessary to answer this particular query. If this is a general greeting or simple question that doesn't require specific data sources, you may include an empty sources array or just 1-2 relevant sources. Quality over quantity - cite only what's truly relevant.`;

    // Generate content with structured output
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Parse the structured JSON response
    const responseText = response.text;
    if (!responseText) {
      throw new Error("No response text from Gemini");
    }

    const structuredResponse = JSON.parse(responseText);

    // Validate the response structure
    if (
      !structuredResponse.message ||
      !Array.isArray(structuredResponse.sources)
    ) {
      throw new Error("Invalid response structure from Gemini");
    }

    // Calculate credits used (1-3 credits based on response complexity)
    const creditsUsed = calculateCredits(
      message,
      structuredResponse.message,
      structuredResponse.sources,
    );

    const successResponse: ApiSuccessResponse = {
      success: true,
      error: null,
      data: {
        message: structuredResponse.message,
        creditsUsed,
        sources: structuredResponse.sources,
      },
    };

    return NextResponse.json(successResponse);
  } catch (error) {
    console.error("Chat API error:", error);
    const errorResponse: ApiErrorResponse = {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
      data: null,
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

function calculateCredits(
  userMessage: string,
  responseMessage: string,
  sources: Array<{ title: string; lastUpdated: string | null }>,
): number {
  // Base credits: 1
  let credits = 1;

  // Add 1 credit if response is longer (more complex query)
  if (responseMessage.length > 500 || userMessage.length > 100) {
    credits += 1;
  }

  // Add 1 credit if multiple sources accessed
  if (sources.length > 2) {
    credits += 1;
  }

  // Ensure we stay within 1-3 range
  return Math.min(Math.max(credits, 1), 3);
}
