import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { User } from "@/domain/User";
import { uuidv7 } from "uuidv7";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greed Island",
  description: "You collect nfts as pretty girls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = new User(uuidv7(), 'ゲスト', 'です男')

  return (
    <html lang="ja">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header user={user} />
        <div className="container px-4 py-2 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
