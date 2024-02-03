"use client";
import { Player } from "@/domain/player/Player";
import { redirect } from "@/lib/redirect";
import { useSession } from "next-auth/react";

interface Props {
  player: Player | null;
}

export default function Home(props: Props) {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    return <div>ログイン済</div>;
  }

  redirect("/signin");
}
