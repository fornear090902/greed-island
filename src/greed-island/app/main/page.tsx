"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Main() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>loading...</div>;
  } else if (status === "unauthenticated") {
    redirect("/signin");
  }

  return <div>メインページ</div>;
}
