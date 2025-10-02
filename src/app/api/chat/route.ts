import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "@getrude-llm/env";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { message?: unknown };
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Call the backend API
    const response = await fetch(`${env.BACKEND_API_URL}/prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.statusText}`);
    }

    const data = (await response.json()) as unknown;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "An error occurred",
        data: null,
      },
      { status: 500 },
    );
  }
}
