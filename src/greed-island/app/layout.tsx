"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import NextAuthProviders from "@/lib/provider";
import TrpcProvider from "./_trpc/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
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
          <TrpcProvider>
            {children}
            {/* <Header />
            <div className="body-frame">{children}</div>
            <Footer /> */}
          </TrpcProvider>
        </NextAuthProviders>
      </body>
    </html>
  );
}
