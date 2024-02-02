'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { User } from "@/domain/User";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User|null>(null)

  return (
    <html lang="ja">
      <head>
        <meta title="Greed Island"></meta>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header user={user} setUser={setUser} />
        <div className="container px-4 py-2 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
