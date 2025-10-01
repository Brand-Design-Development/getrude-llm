export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl font-bold text-[#0096d6]">Admin Panel</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="mb-2 font-semibold">User Management</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">User</th>
                <th className="p-2">Role</th>
                <th className="p-2">Credits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Jane Doe</td>
                <td className="p-2">Doctor</td>
                <td className="p-2">120</td>
              </tr>
              <tr>
                <td className="p-2">John Smith</td>
                <td className="p-2">Admin</td>
                <td className="p-2">∞</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="mb-2 font-semibold">Credit Pricing</h2>
          <div className="mb-2">
            Current rate: <span className="font-bold">0.01 credits/token</span>
          </div>
          <input
            type="range"
            min="0.005"
            max="0.05"
            step="0.001"
            value="0.01"
            disabled
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
