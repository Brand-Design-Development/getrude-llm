"use client";

import { useState, type KeyboardEvent } from "react";
import { Send, Paperclip, Mic } from "lucide-react";

interface PromptInputProps {
  onSendMessage: (message: string) => void;
  canSubmit: boolean;
  credits: number;
  isLoading: boolean;
}

export default function PromptInput({
  onSendMessage,
  canSubmit,
  credits,
  isLoading,
}: PromptInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() && canSubmit) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="space-y-3">
      {/* Input Area */}
      <div className="flex items-end gap-3">
        <div className="relative flex-1">
          <div className="flex items-start">
            <textarea
              className="max-h-[200px] min-h-[56px] w-full resize-none rounded-xl border border-gray-300 py-4 pr-20 pl-4 text-base placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50"
              placeholder="Ask about pediatric protocols, treatment guidelines, or patient outcomes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!canSubmit}
              rows={1}
              style={{
                height: "auto",
                overflowY: input.split("\n").length > 3 ? "auto" : "hidden",
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
              }}
            />
            <div className="absolute top-4 right-3 flex items-center gap-1">
              <button
                className="cursor-pointer rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50"
                disabled={isLoading}
              >
                <Paperclip className="h-4 w-4" />
              </button>
              <button
                className="cursor-pointer rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50"
                disabled={isLoading}
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            className="group inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!canSubmit || !input.trim()}
          >
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>Press Enter to send, Shift+Enter for new line</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <div
              className={`h-2 w-2 rounded-full ${isLoading ? "bg-yellow-500" : "bg-green-500"}`}
            ></div>
            {isLoading ? "Processing..." : "AI Assistant Online"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={credits < 10 ? "font-medium text-red-600" : ""}>
            {credits} credits remaining
          </span>
        </div>
      </div>
    </div>
  );
}
