interface PromptInputProps {
  estimatedCredits: number;
  canSubmit: boolean;
}

export default function PromptInput({
  estimatedCredits,
  canSubmit,
}: PromptInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="flex-1 rounded border p-2"
        placeholder="Type your prompt..."
        disabled
      />
      <span className="text-sm text-gray-500">
        Est. {estimatedCredits} credits
      </span>
      <button
        className="rounded bg-[#0096d6] px-4 py-2 text-white disabled:opacity-50"
        disabled={!canSubmit}
      >
        Submit
      </button>
    </div>
  );
}
