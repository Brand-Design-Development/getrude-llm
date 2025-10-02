"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Bot,
  User,
  Pill,
  ClipboardList,
  BarChart3,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { ChatMessage } from "@getrude-llm/types/chat";

interface ChatPaneProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export default function ChatPane({ messages, isLoading }: ChatPaneProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [expandedSources, setExpandedSources] = useState<Set<string>>(
    new Set(),
  );

  const toggleSources = (messageId: string) => {
    setExpandedSources((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  // Empty state
  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-blue-100">
            <Bot className="h-10 w-10 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Welcome to Gertrude Chat
            </h3>
            <p className="mt-2 max-w-md text-gray-600">
              Ask me about pediatric protocols, treatment guidelines, patient
              outcomes, or any hospital data you need. I&apos;m here to help!
            </p>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700">
              <Pill className="h-4 w-4" />
              Medication dosing
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
              <ClipboardList className="h-4 w-4" />
              Treatment protocols
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-2 text-sm text-purple-700">
              <BarChart3 className="h-4 w-4" />
              Patient analytics
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Chat Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.role === "user" ? (
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-blue-50 px-4 py-3">
                      <p className="text-base text-gray-900">{msg.content}</p>
                    </div>
                    <div className="mt-1 ml-1 flex items-center gap-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                      msg.error ? "bg-red-100" : "bg-green-100"
                    }`}
                  >
                    <Bot
                      className={`h-4 w-4 ${
                        msg.error ? "text-red-600" : "text-green-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`max-w-[85%] rounded-2xl rounded-tl-md border px-4 py-3 ${
                        msg.error
                          ? "border-red-200 bg-red-50"
                          : "border-gray-200 bg-white shadow-sm"
                      }`}
                    >
                      {msg.error ? (
                        <>
                          <div className="mb-2 flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                              Error
                            </span>
                          </div>
                          <p className="mb-3 text-base text-red-700">
                            {msg.error}
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="prose prose-sm mb-3 max-w-none text-base text-gray-900">
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                          </div>

                          {/* Sources Section */}
                          {msg.sources && msg.sources.length > 0 && (
                            <div className="mt-3 border-t border-gray-100 pt-3">
                              <button
                                onClick={() => toggleSources(msg.id)}
                                className="mb-2 flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg p-2 transition-colors hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-blue-600" />
                                  <span className="text-sm font-medium text-gray-700">
                                    Sources ({msg.sources.length})
                                  </span>
                                </div>
                                {expandedSources.has(msg.id) ? (
                                  <ChevronUp className="h-4 w-4 text-gray-500" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-gray-500" />
                                )}
                              </button>
                              {expandedSources.has(msg.id) && (
                                <div className="space-y-2">
                                  {msg.sources.map((source, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-2 rounded-lg bg-blue-50 p-2"
                                    >
                                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                          {source.title}
                                        </p>
                                        {source.lastUpdated && (
                                          <p className="text-xs text-gray-600">
                                            Updated: {source.lastUpdated}
                                          </p>
                                        )}
                                      </div>
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Footer */}
                          {msg.creditsUsed !== undefined && (
                            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                  <span className="text-sm text-gray-600">
                                    {msg.creditsUsed} credits used
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div className="mt-1 ml-1 flex items-center gap-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
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
          )}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}
