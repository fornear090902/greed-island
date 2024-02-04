"use client";

import { library } from "@/lib/japanese";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePlayer() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");

  if (status === "loading") {
    return <div>loading...</div>;
  } else if (status === "unauthenticated") {
    router.push("/signin");
    return;
  }

  const userId = session?.userId;

  const onChangeName = ({ target }: { target: HTMLInputElement }) => {
    setName(target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    const res = await fetch("/api/player/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, name }),
    });

    if (res.status === 200) {
      router.push("/main");
    } else {
      alert("登録に失敗しました");
    }
  };

  return (
    <div className="h-full flex items-center">
      <div className="border-gray-400 rounded-md border-2 p-4">
        <h1 className="font-bold text-2xl text-center">
          {library.createPlayer.title}
        </h1>
        <p className="text-center">{library.createPlayer.inputYourName}</p>
        <div className="text-center my-2">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-1 text-center"
            value={name}
            onChange={onChangeName}
            maxLength={20}
          />
        </div>
        <div className="text-center my-2">
          <button
            className="rounded-md hover:bg-gray-200 py-1 px-2"
            onClick={onSubmit}
          >
            {library.common.submit}
          </button>
        </div>
      </div>
    </div>
  );
}
