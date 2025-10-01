import Link from "next/link";
import {
  Home,
  MessageCircle,
  History,
  CreditCard,
  Settings,
  Shield,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Chat", href: "/chat", icon: MessageCircle },
  { name: "History", href: "/history", icon: History },
  { name: "Purchase Credits", href: "/credits", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Admin Panel", href: "/admin", icon: Shield },
];

export default function Sidebar() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : undefined;
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-gradient-to-b from-[#eaf6fb] to-white shadow-lg">
      <div className="flex items-center gap-2 p-6 pb-2">
        <img src="/logo.png" alt="Getrude Logo" className="h-8 w-8" />
        <span className="text-xl font-extrabold tracking-tight text-[#0096d6]">
          Getrude LLM
        </span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-2 py-4">
        {navItems.map(({ name, href, icon: Icon }) => {
          const active =
            typeof window !== "undefined" ? pathname === href : false;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-base font-medium transition-colors hover:bg-[#0096d6]/10 hover:text-[#0096d6] ${active ? "bg-[#0096d6]/10 font-semibold text-[#0096d6]" : "text-gray-700"}`}
            >
              <Icon size={20} className="shrink-0" />
              {name}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Getrude LLM
      </div>
    </aside>
  );
}
