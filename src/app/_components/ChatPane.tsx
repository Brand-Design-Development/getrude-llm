import SourceList from "./SourceList";

export default function ChatPane() {
  return (
    <div className="space-y-6 p-6">
      <div className="rounded bg-white p-4 shadow">
        <div className="mb-2 font-semibold text-gray-700">You:</div>
        <div className="mb-2">What is the hospital policy on X?</div>
        <div className="mb-2 font-semibold text-gray-700">Assistant:</div>
        <div className="mb-2">The hospital policy on X is ...</div>
        <div className="mt-2 flex items-center gap-4">
          <span className="text-xs text-gray-500">
            Credits used: <b>3</b>
          </span>
          <SourceList
            sources={[
              {
                title: "Policy Handbook",
                date: "2025-09-01",
                snippet: "...policy on X...",
              },
            ]}
          />
        </div>
      </div>
      <div className="rounded bg-white p-4 opacity-60 shadow">
        <div className="mb-2 font-semibold text-gray-700">You:</div>
        <div className="mb-2">Show me patient stats</div>
        <div className="mb-2 font-semibold text-gray-700">Assistant:</div>
        <div className="mb-2 text-red-600">Insufficient credits</div>
        <div className="mt-2 flex items-center gap-4">
          <span className="text-xs text-gray-500">
            Credits used: <b>0</b>
          </span>
        </div>
      </div>
    </div>
  );
}
