import { FileText, Clock, CheckCircle, XCircle, Bot, User } from "lucide-react";
import SourceList from "./SourceList";

export default function ChatPane() {
  return (
    <div className="flex h-full flex-col">
      {/* Chat Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {/* Welcome Message */}
        <div className="py-8 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Bot className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Welcome to Getrude AI Assistant
          </h3>
          <p className="mx-auto max-w-md text-gray-600">
            Ask me anything about hospital policies, procedures, patient data,
            or medical guidelines. I'm here to help with accurate, source-backed
            answers.
          </p>
        </div>

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
                  What is the hospital policy on X?
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
                  The hospital policy on X is outlined in our comprehensive
                  guidelines. According to the latest policy handbook, all staff
                  must follow specific protocols when handling patient
                  information and medical procedures.
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
                          Policy Handbook Section 4.2
                        </p>
                        <p className="text-xs text-gray-600">
                          Updated: Sep 1, 2025 • Page 42-45
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
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-gray-500">Verified</span>
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
                  I don't have enough credits to process this request. Please
                  purchase more credits to continue.
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
                  Getrude is thinking...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
