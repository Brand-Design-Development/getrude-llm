import "@getrude-llm/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@getrude-llm/trpc/react";
import Sidebar from "./_components/Sidebar";
import TopBar from "./_components/TopBar";

export const metadata: Metadata = {
  title: "Getrude LLM",
  description:
    "Your secure hospital AI assistant. Ask questions, analyze data, and manage your credits all in one modern dashboard.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen bg-gray-100">
        <TRPCReactProvider>
          <div className="flex h-screen">
            {/* Sidebar */}
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              {/* TopBar */}
              <TopBar />
              <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
