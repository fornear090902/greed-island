"use client";

import { Signup } from "@/components/Signup";
import { Status } from "@/components/player/template/Status";
import { Player } from "@/domain/player/Player";
import { useSession } from "next-auth/react";

interface Props {
  player: Player | null;
}

export default function Home(props: Props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{session ? <div>サインイン済</div> : <Signup />}</>;
}
