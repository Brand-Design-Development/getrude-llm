import {
  MessageCircle,
  BarChart2,
  CreditCard,
  History,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Gertrude Chat</h1>
        <p className="text-gray-600">
          Access Gertrude&apos;s comprehensive hospital data, medical insights,
          and policy information through our AI-powered platform. Trusted by
          healthcare institutions worldwide.
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
              <p className="text-sm font-medium text-gray-600">
                Data Queries Today
              </p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <BarChart2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Partner Hospitals
              </p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <CreditCard className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                API Calls Today
              </p>
              <p className="text-2xl font-bold text-gray-900">15.2k</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <History className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Data Points Served
              </p>
              <p className="text-2xl font-bold text-gray-900">2.4M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Query Data
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Access medical policies, guidelines, and patient data through our AI
            interface.
          </p>
          <a
            href="/chat"
            className="inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-200 hover:bg-blue-100"
          >
            Start querying
          </a>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <BarChart2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Data Analytics
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            View platform usage, query patterns, and performance metrics across
            partner institutions.
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
              API Credits
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Manage your API usage, purchase additional credits, and review
            billing history.
          </p>
          <a
            href="/credits"
            className="inline-flex items-center rounded-lg bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition-colors duration-200 hover:bg-orange-100"
          >
            Manage credits
          </a>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
          <div className="mb-4 flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
              <History className="h-5 w-5 text-white" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-gray-900">
              Query History
            </h3>
          </div>
          <p className="mb-4 text-gray-600">
            Review all data queries, responses, and source attributions from
            your organization.
          </p>
          <a
            href="/history"
            className="inline-flex items-center rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition-colors duration-200 hover:bg-purple-100"
          >
            View history
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="/chat"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <MessageCircle className="mr-3 h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Real-time Data Queries
            </span>
          </a>
          <a
            href="/history"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <History className="mr-3 h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-900">
              Query Analytics
            </span>
          </a>
          <a
            href="/credits"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <CreditCard className="mr-3 h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-gray-900">
              API Credit Management
            </span>
          </a>
          <a
            href="/settings"
            className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-50"
          >
            <User className="mr-3 h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-900">
              Organization Settings
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
