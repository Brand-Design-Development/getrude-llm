interface PromptInputProps {
  estimatedCredits: number;
  canSubmit: boolean;
}

export default function PromptInput({
  estimatedCredits,
  canSubmit,
}: PromptInputProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          placeholder="Ask me anything about hospital policies, procedures, or data..."
          disabled
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs whitespace-nowrap text-gray-500">
          ~{estimatedCredits} credits
        </span>
        <button
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!canSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
}
