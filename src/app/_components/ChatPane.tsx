import SourceList from "./SourceList";

export default function ChatPane() {
  return (
    <div className="space-y-4 p-6">
      <div className="space-y-4">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg bg-blue-600 px-4 py-2 text-white">
            <div className="text-sm">What is the hospital policy on X?</div>
          </div>
        </div>

        {/* Assistant Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="mb-3 text-sm text-gray-900">
              The hospital policy on X is outlined in our comprehensive
              guidelines. According to the latest policy handbook, all staff
              must follow specific protocols when handling...
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-xs text-gray-500">
              <span>
                Credits used: <span className="font-medium">3</span>
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
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg bg-blue-600 px-4 py-2 text-white">
            <div className="text-sm">Show me patient stats</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <div className="mb-2 text-sm text-red-700">
              Insufficient credits to process this request.
            </div>
            <div className="text-xs text-red-600">
              Credits used: <span className="font-medium">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
