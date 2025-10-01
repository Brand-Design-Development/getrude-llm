export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-xl p-8">
      <h1 className="mb-4 text-xl font-bold text-[#0096d6]">Settings</h1>
      <div className="rounded bg-white p-6 shadow">
        <div className="mb-4">
          <label className="block font-semibold">Name</label>
          <input
            className="mt-1 w-full rounded border p-2"
            value="Jane Doe"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Role</label>
          <input
            className="mt-1 w-full rounded border p-2"
            value="Doctor"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            className="mt-1 w-full rounded border p-2"
            value="jane@hospital.org"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Usage Alerts</label>
          <input type="checkbox" checked readOnly className="mr-2" /> Enable
          usage alerts
        </div>
        <button
          className="mt-2 rounded bg-[#0096d6] px-4 py-2 text-white"
          disabled
        >
          Save
        </button>
      </div>
    </div>
  );
}
