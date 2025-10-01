import {
  MessageCircle,
  BarChart2,
  CreditCard,
  History,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-10 md:p-16">
      <section className="mb-6 flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0096d6]">
          Welcome to Getrude LLM
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Your secure hospital AI assistant. Ask questions, analyze data, and
          manage your credits all in one modern dashboard.
        </p>
      </section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-br from-[#0096d6]/90 to-[#eaf6fb] p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <MessageCircle
              className="rounded-full bg-[#0096d6] p-1 text-white"
              size={32}
            />
            <span className="text-lg font-semibold text-[#0096d6]">Chat</span>
          </div>
          <p className="text-gray-700">
            Ask medical or policy questions and get instant answers with source
            attribution.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-br from-[#0096d6]/90 to-[#eaf6fb] p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <BarChart2
              className="rounded-full bg-[#0096d6] p-1 text-white"
              size={32}
            />
            <span className="text-lg font-semibold text-[#0096d6]">
              Analytics
            </span>
          </div>
          <p className="text-gray-700">
            Track your credit usage, view history, and monitor your activity.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-br from-[#0096d6]/90 to-[#eaf6fb] p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <CreditCard
              className="rounded-full bg-[#0096d6] p-1 text-white"
              size={32}
            />
            <span className="text-lg font-semibold text-[#0096d6]">
              Credits
            </span>
          </div>
          <p className="text-gray-700">
            Purchase more credits or review your current balance and plan.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-gradient-to-br from-[#0096d6]/90 to-[#eaf6fb] p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <History
              className="rounded-full bg-[#0096d6] p-1 text-white"
              size={32}
            />
            <span className="text-lg font-semibold text-[#0096d6]">
              History
            </span>
          </div>
          <p className="text-gray-700">
            Review your past queries, responses, and credit usage.
          </p>
        </div>
      </div>
      <section className="mt-10">
        <h2 className="mb-2 text-2xl font-bold text-[#0096d6]">Get Started</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <li className="flex items-center gap-3 rounded-lg border border-[#0096d6]/20 bg-white p-4 shadow-sm">
            <MessageCircle className="text-[#0096d6]" size={24} />
            <span>
              Go to{" "}
              <a
                href="/chat"
                className="font-semibold text-[#0096d6] underline"
              >
                Chat
              </a>{" "}
              to ask a question
            </span>
          </li>
          <li className="flex items-center gap-3 rounded-lg border border-[#0096d6]/20 bg-white p-4 shadow-sm">
            <CreditCard className="text-[#0096d6]" size={24} />
            <span>
              Visit{" "}
              <a
                href="/credits"
                className="font-semibold text-[#0096d6] underline"
              >
                Purchase Credits
              </a>{" "}
              to top up
            </span>
          </li>
          <li className="flex items-center gap-3 rounded-lg border border-[#0096d6]/20 bg-white p-4 shadow-sm">
            <History className="text-[#0096d6]" size={24} />
            <span>
              Check{" "}
              <a
                href="/history"
                className="font-semibold text-[#0096d6] underline"
              >
                History
              </a>{" "}
              for your previous queries
            </span>
          </li>
          <li className="flex items-center gap-3 rounded-lg border border-[#0096d6]/20 bg-white p-4 shadow-sm">
            <User className="text-[#0096d6]" size={24} />
            <span>
              Update your{" "}
              <a
                href="/settings"
                className="font-semibold text-[#0096d6] underline"
              >
                Settings
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
