export default function SettingsPage() {
  return (
    <div className="w-full p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Organization Settings
        </h1>
        <p className="text-gray-600">
          Manage your organization's account settings, API preferences, and data
          access controls.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Profile Settings */}
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Organization Information
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Organization Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  value="St. Mary's Hospital"
                  readOnly
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact Person
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  value="Dr. Jane Doe"
                  readOnly
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  API Contact Email
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  value="api@stmarys.hospital.org"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              API Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Usage Alerts
                  </label>
                  <p className="text-sm text-gray-600">
                    Get notified when your credit usage is high
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked
                    readOnly
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-600">
                    Receive important updates via email
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked
                    readOnly
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Data Export Access
                  </label>
                  <p className="text-sm text-gray-600">
                    Allow bulk data exports for your organization
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" readOnly />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Security */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Security
            </h2>
            <div className="space-y-4">
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-200 hover:bg-blue-100">
                  Change Password
                </button>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-lg bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100">
                  Two-Factor Authentication
                </button>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition-colors duration-200 hover:bg-red-100">
                  Reset API Keys
                </button>
              </div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Usage Overview
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Credits Remaining</span>
                <span className="text-sm font-medium text-gray-900">2,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <span className="text-sm font-medium text-gray-900">
                  1,153 queries
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Plan</span>
                <span className="text-sm font-medium text-blue-600">
                  Enterprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-end space-x-3">
        <button
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          disabled
        >
          Cancel
        </button>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
