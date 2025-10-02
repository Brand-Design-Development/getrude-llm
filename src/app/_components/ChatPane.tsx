import { FileText, Clock, CheckCircle, XCircle, Bot, User } from "lucide-react";

export default function ChatPane() {
  return (
    <div className="flex h-full flex-col">
      {/* Chat Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {/* Conversation */}
        <div className="space-y-6">
          {/* User Message */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-blue-50 px-4 py-3">
                <p className="text-base text-gray-900">
                  What are the current pediatric dosing guidelines for
                  amoxicillin in children under 2 years?
                </p>
              </div>
              <div className="mt-1 ml-1 flex items-center gap-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">2:30 PM</span>
              </div>
            </div>
          </div>

          {/* Assistant Response */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
              <Bot className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <p className="mb-3 text-base text-gray-900">
                  Based on our current pediatric pharmacy protocols, for
                  children under 2 years, the recommended dosing for amoxicillin
                  is:
                  <br />
                  <br />• <strong>Standard dose:</strong> 20-40 mg/kg/day
                  divided into 2-3 doses
                  <br />• <strong>For severe infections:</strong> Up to 80-90
                  mg/kg/day
                  <br />• <strong>Duration:</strong> Typically 7-10 days
                  <br />
                  <br />
                  Always consider the child&apos;s weight, severity of
                  infection, and any underlying conditions. Liquid formulation
                  is preferred for this age group.
                </p>

                {/* Sources Section */}
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Sources
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Pediatric Pharmacy Guidelines v2.1
                        </p>
                        <p className="text-xs text-gray-600">
                          Updated: Nov 15, 2024 • Section 3.4-3.7
                        </p>
                      </div>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-600">
                        3 credits used
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1 ml-1 flex items-center gap-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">2:31 PM</span>
              </div>
            </div>
          </div>

          {/* Another User Message */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-blue-50 px-4 py-3">
                <p className="text-base text-gray-900">Show me patient stats</p>
              </div>
              <div className="mt-1 ml-1 flex items-center gap-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">2:32 PM</span>
              </div>
            </div>
          </div>

          {/* Error Response */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
              <Bot className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-red-200 bg-red-50 px-4 py-3">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-800">
                    Insufficient Credits
                  </span>
                </div>
                <p className="mb-3 text-base text-red-700">
                  You don&apos;t have enough credits to process this request.
                  Please purchase more credits to continue.
                </p>

                <div className="flex items-center justify-between border-t border-red-200 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span className="text-sm text-red-700">
                        0 credits used
                      </span>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-red-600 hover:text-red-800">
                    Buy Credits
                  </button>
                </div>
              </div>
              <div className="mt-1 ml-1 flex items-center gap-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500">2:32 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typing Indicator (when active) */}
      <div className="px-6 pb-2">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
            <Bot className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">
                  Gertrude is thinking...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
