import ChatPane from "../_components/ChatPane";
import PromptInput from "../_components/PromptInput";
import CreditBadge from "../_components/CreditBadge";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col p-6">
        <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex-1 overflow-y-auto">
            <ChatPane />
          </div>
          <div className="border-t border-gray-200 bg-white p-6">
            <PromptInput estimatedCredits={3} canSubmit={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
