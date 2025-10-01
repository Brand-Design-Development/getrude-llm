import CreditBadge from "./CreditBadge";

export default function TopBar() {
  return (
    <header className="z-10 flex w-full items-center justify-between border-b bg-white/80 px-8 py-4 shadow-md backdrop-blur">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Getrude Logo"
          className="h-9 w-9 rounded-lg shadow"
        />
        <span className="text-2xl font-extrabold tracking-tight text-[#0096d6]">
          Getrude LLM
        </span>
      </div>
      <div className="flex items-center gap-6">
        <CreditBadge credits={42} />
        <span className="font-semibold text-gray-700">Jane Doe</span>
        <img
          src="/favicon.ico"
          alt="User"
          className="h-10 w-10 rounded-full border-2 border-[#0096d6] shadow"
        />
      </div>
    </header>
  );
}
