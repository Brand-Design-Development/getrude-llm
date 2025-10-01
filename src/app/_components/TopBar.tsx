import CreditBadge from "./CreditBadge";

export default function TopBar() {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <img src="/logo.png" alt="Getrude Logo" className="h-5 w-5" />
        </div>
        <span className="text-lg font-semibold text-gray-900">Getrude LLM</span>
      </div>
      <div className="flex items-center gap-4">
        <CreditBadge credits={42} />
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Jane Doe</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
            <img
              src="/favicon.ico"
              alt="User"
              className="h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
