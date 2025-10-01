export default function CreditsPage() {
  return (
    <div className="w-full p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          API Credit Management
        </h1>
        <p className="text-gray-600">
          Choose a plan that fits your organization&apos;s data access needs. Credits
          are used for API queries, data analysis, and AI-powered insights.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">Basic</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$50</span>
              <span className="ml-1 text-gray-600">/1K credits</span>
            </div>
            <p className="mb-6 text-gray-600">
              For small clinics and practices
            </p>
            <button
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              Purchase
            </button>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic AI queries
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Policy lookup
              </li>
            </ul>
          </div>
        </div>

        <div className="relative rounded-xl border-2 border-blue-200 bg-white p-6 shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              Most Popular
            </span>
          </div>
          <div className="text-center">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">Pro</h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$100</span>
              <span className="ml-1 text-gray-600">/1k credits</span>
            </div>
            <p className="mb-6 text-gray-600">Best value for regular users</p>
            <button
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              Purchase
            </button>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced AI queries
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Data analysis
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Priority support
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Enterprise
            </h2>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">$500</span>
              <span className="ml-1 text-gray-600">/1k credits</span>
            </div>
            <p className="mb-6 text-gray-600">For teams and heavy usage</p>
            <button
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            >
              Purchase
            </button>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited queries
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Bulk data processing
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-blue-50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Current Balance
        </h3>
        <p className="mb-4 text-gray-600">
          You currently have 42 credits remaining.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Last purchase: Pro Plan (500 credits)
          </span>
          <span className="text-sm text-gray-500">Jan 15, 2025</span>
        </div>
      </div>
    </div>
  );
}
