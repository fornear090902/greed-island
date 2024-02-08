"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProviders from "@/lib/provider";
import { trpc } from "@/lib/trpc";

const inter = Inter({ subsets: ["latin"] });

const MyApp = function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta title="Greed Island"></meta>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NextAuthProviders>
          <div className="h-full w-full bg-slate-900 flex flex-row justify-center text-white">
            {children}
          </div>
        </NextAuthProviders>
      </body>
    </html>
  );
}

export default trpc.withTRPC(MyApp);