import ChatPane from "../_components/ChatPane";
import PromptInput from "../_components/PromptInput";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full flex-1 flex-col p-6 pb-0">
        <div className="flex flex-1 flex-col overflow-hidden rounded-t-xl border border-b-0 border-gray-200 bg-white shadow-sm">
          <div className="flex-1 overflow-y-auto">
            <ChatPane />
          </div>
        </div>
      </div>

      {/* Sticky Input Area */}
      <div className="sticky bottom-0 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            <PromptInput estimatedCredits={3} canSubmit={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
