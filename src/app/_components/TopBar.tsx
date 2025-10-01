import Image from "next/image";
import CreditBadge from "./CreditBadge";
import Link from "next/link";

export default function TopBar() {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center">
          <Image
            src="/logo.png"
            alt="Getrude Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </div>
        <span className="text-xl font-semibold text-gray-900">
          Getrude Chat
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <CreditBadge credits={42} />
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-gray-700">Jane Doe</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
            <Image
              src="/favicon.ico"
              alt="User"
              width={24}
              height={24}
              className="h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
