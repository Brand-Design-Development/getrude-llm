import {
  MessageCircle,
  BarChart2,
  CreditCard,
  History,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Welcome back, Jane
        </h1>
        <p className="text-gray-600">
          Your secure hospital AI assistant. Ask questions, analyze data, and
          manage your credits.
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Chats</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <BarChart2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">2.4k</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <CreditCard className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Credits</p>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <History className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Queries</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Start Chat
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Ask medical or policy questions and get instant answers with source
            attribution.
          </p>
          <a
            href="/chat"
            className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-200 hover:bg-blue-100"
          >
            Start chatting
          </a>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <BarChart2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Analytics
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Track your credit usage, view history, and monitor your activity.
          </p>
          <a
            href="/history"
            className="inline-flex items-center rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition-colors duration-200 hover:bg-green-100"
          >
            View analytics
          </a>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Buy Credits
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Purchase more credits or review your current balance and plan.
          </p>
          <a
            href="/credits"
            className="inline-flex items-center rounded-lg bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition-colors duration-200 hover:bg-orange-100"
          >
            Purchase credits
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="/chat"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <MessageCircle className="mr-3 h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Ask a new question
            </span>
          </a>
          <a
            href="/history"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <History className="mr-3 h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-900">
              View chat history
            </span>
          </a>
          <a
            href="/credits"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <CreditCard className="mr-3 h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-gray-900">
              Manage credits
            </span>
          </a>
          <a
            href="/settings"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <User className="mr-3 h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-900">
              Update settings
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
