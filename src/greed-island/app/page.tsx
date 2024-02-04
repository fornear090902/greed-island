"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return <div>ログイン済</div>;
  }

  router.push("/signin");
}
