export default function HistoryPage() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl font-bold text-[#0096d6]">Query History</h1>
      <table className="w-full rounded bg-white shadow">
        <thead>
          <tr className="bg-[#0096d6] text-white">
            <th className="p-2">Prompt</th>
            <th className="p-2">Response</th>
            <th className="p-2">Credits</th>
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
            <th className="p-2">Sources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">What is the hospital policy on X?</td>
            <td className="p-2">The hospital policy on X is...</td>
            <td className="p-2">3</td>
            <td className="p-2">2025-10-01</td>
            <td className="p-2 text-green-600">Success</td>
            <td className="p-2">Policy Handbook</td>
          </tr>
          <tr>
            <td className="p-2">Show me patient stats</td>
            <td className="p-2">Insufficient credits</td>
            <td className="p-2">0</td>
            <td className="p-2">2025-10-01</td>
            <td className="p-2 text-red-600">Failed</td>
            <td className="p-2">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
