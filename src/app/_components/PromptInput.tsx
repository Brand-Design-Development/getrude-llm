import { Send, Paperclip, Mic } from "lucide-react";

interface PromptInputProps {
  estimatedCredits: number;
  canSubmit: boolean;
}

export default function PromptInput({
  estimatedCredits,
  canSubmit,
}: PromptInputProps) {
  return (
    <div className="space-y-3">
      {/* Quick Suggestions */}
      <div className="flex flex-wrap gap-2">
        <button className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm text-blue-700 transition-colors hover:bg-blue-100">
          Hospital policies
        </button>
        <button className="inline-flex items-center rounded-full bg-green-50 px-3 py-1.5 text-sm text-green-700 transition-colors hover:bg-green-100">
          Emergency procedures
        </button>
        <button className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1.5 text-sm text-purple-700 transition-colors hover:bg-purple-100">
          Patient data analysis
        </button>
        <button className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1.5 text-sm text-orange-700 transition-colors hover:bg-orange-100">
          Medication guidelines
        </button>
      </div>

      {/* Input Area */}
      <div className="flex items-end gap-3">
        <div className="relative flex-1">
          <div className="flex items-center">
            <input
              className="w-full resize-none rounded-xl border border-gray-300 py-4 pr-20 pl-4 text-base placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              placeholder="Ask me anything about hospital policies, procedures, or data..."
              disabled
            />
            <div className="absolute right-3 flex items-center gap-1">
              <button className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
                <Mic className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">
              ~{estimatedCredits}
            </div>
            <div className="text-xs text-gray-500">credits</div>
          </div>
          <button
            className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!canSubmit}
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
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            AI Assistant Online
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>42 credits remaining</span>
        </div>
      </div>
    </div>
  );
}
