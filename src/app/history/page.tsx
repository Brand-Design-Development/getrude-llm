export default function HistoryPage() {
  return (
    <div className="w-full p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Query History</h1>
        <p className="text-gray-600">
          Monitor all data queries, responses, and API usage across your
          organization and partner institutions.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Query
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Response
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Sources
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    What are the current pediatric dosing guidelines for
                    amoxicillin in children under 2 years?
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    Standard dose: 20-40 mg/kg/day divided into 2-3 doses. For
                    severe infections: Up to 80-90 mg/kg/day...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Children's Medical Center
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    3 credits
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  Oct 1, 2025 2:31 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    Pediatric Guidelines
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    What are the latest COVID-19 protocols for patient
                    admission?
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    Current COVID-19 protocols require temperature screening,
                    vaccination verification...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    St. Mary's Hospital
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    3 credits
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  Oct 1, 2025 2:30 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    Policy Handbook
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    Show me patient stats
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    Insufficient credits to process this request
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Metro General Hospital
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    0 credits
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  Oct 1, 2025 2:25 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Failed
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  -
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    What are the emergency procedures?
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate text-sm text-gray-900">
                    Emergency procedures include immediate assessment, triage
                    protocols...
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Regional Medical Center
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    4 credits
                  </span>
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  Oct 1, 2025 1:15 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Success
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    Emergency Manual
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">4</span> of{" "}
          <span className="font-medium">4</span> results
        </p>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
