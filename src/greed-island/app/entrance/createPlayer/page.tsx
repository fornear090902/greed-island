'use client';
import { library } from "@/lib/japanese";
import { trpc } from "@/lib/trpc";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Page() {
    const { data: session, status } = useSession();
    const [name, setName] = useState("");
    const mutation = trpc.createPlayer.useMutation();

    const onChangeName = ({ target }: { target: HTMLInputElement }) => {
        setName(target.value);
    };
    const onSubmit = async () => {
        const userId = session?.user.id!;
        await mutation.mutateAsync({ userId, name: name })
        signIn("google", { callbackUrl: "/main" })
    }

    return (
        <div className="h-full flex items-start">
            <div className="border-gray-400 rounded-md border-2 p-4">
                <h1 className="font-bold text-2xl text-center">
                    {library.createPlayer.title}
                </h1>
                <p className="text-center">{library.createPlayer.inputYourName}</p>
                <div className="text-center my-2">
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded-md p-1 text-center text-black"
                        value={name}
                        onChange={onChangeName}
                        maxLength={20}
                    />
                </div>
                <div className="text-center my-2">
                    <button
                        className="px-3 py-2 rounded-lg text-xl bg-white hover:bg-slate-200 border-2 border-slate-950 text-slate-950"
                        onClick={onSubmit}
                    >
                        {library.common.submit}
                    </button>
                </div>
            </div>
        </div>
    )
}