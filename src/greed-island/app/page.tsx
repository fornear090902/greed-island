"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return <div>ログイン済</div>;
  }

  redirect("/signin");
}
