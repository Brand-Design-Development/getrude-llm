import ChatPane from "../_components/ChatPane";
import PromptInput from "../_components/PromptInput";
import CreditBadge from "../_components/CreditBadge";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-[#eaf6fb] to-white">
      <div className="flex items-center justify-between border-b bg-white/80 p-6 shadow-sm backdrop-blur">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#0096d6]">
          Chat
        </h1>
        <CreditBadge credits={42} low={false} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-2 py-8 md:px-0">
        <div className="flex w-full max-w-2xl flex-1 flex-col overflow-hidden rounded-2xl border border-[#0096d6]/10 bg-white/90 shadow-lg">
          <div className="flex-1 overflow-y-auto">
            <ChatPane />
          </div>
          <div className="border-t bg-white p-4">
            <PromptInput estimatedCredits={3} canSubmit={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
