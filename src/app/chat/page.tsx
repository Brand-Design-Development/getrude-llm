import ChatPane from "../_components/ChatPane";
import PromptInput from "../_components/PromptInput";
import CreditBadge from "../_components/CreditBadge";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-900">Chat Assistant</h1>
        <CreditBadge credits={42} low={false} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="flex w-full max-w-4xl flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex-1 overflow-y-auto">
            <ChatPane />
          </div>
          <div className="border-t border-gray-200 bg-white p-4">
            <PromptInput estimatedCredits={3} canSubmit={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
