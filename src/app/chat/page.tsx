"use client";

import { useState } from "react";
import ChatPane from "../_components/ChatPane";
import PromptInput from "../_components/PromptInput";
import type { ChatMessage, ApiResponse } from "@getrude-llm/types/chat";

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState(42);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = (await response.json()) as ApiResponse;

      if (data.success && data.data) {
        // Add assistant message
        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.data.message,
          timestamp: new Date(),
          creditsUsed: data.data.creditsUsed,
          sources: data.data.sources,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setCredits((prev) => Math.max(0, prev - data.data.creditsUsed));
      } else {
        // Add error message
        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "",
          timestamp: new Date(),
          error: data.error || "An unexpected error occurred",
        };

        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
        error: "Failed to send message. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full flex-1 flex-col p-6 pb-0">
        <div className="flex flex-1 flex-col overflow-hidden rounded-t-xl border border-b-0 border-gray-200 bg-white shadow-sm">
          <div className="flex-1 overflow-y-auto">
            <ChatPane messages={messages} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Sticky Input Area */}
      <div className="sticky bottom-0 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            <PromptInput
              onSendMessage={handleSendMessage}
              canSubmit={!isLoading && credits > 0}
              credits={credits}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
