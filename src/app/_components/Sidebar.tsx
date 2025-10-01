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
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <img src="/logo.png" alt="Getrude Logo" className="h-6 w-6" />
        </div>
        <span className="text-xl font-semibold text-gray-900">Getrude LLM</span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-4">
        {navItems.map(({ name, href, icon: Icon }) => {
          const active =
            typeof window !== "undefined" ? pathname === href : false;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${active ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <Icon size={18} className="shrink-0" />
              {name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-100 p-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Getrude LLM
      </div>
    </aside>
  );
}
