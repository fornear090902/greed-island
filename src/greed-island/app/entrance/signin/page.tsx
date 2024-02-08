'use client';
import { signIn } from "next-auth/react";

export default function Page() {

    const onClick = async () => {
        await signIn("google", { callbackUrl: "/entrance" });
    }

    return (
        <div className="flex flex-col justify-evenly">
            <div>
                <button
                    onClick={onClick}
                    className="px-6 py-4 rounded-lg text-3xl bg-white hover:bg-slate-200 border-2 border-slate-950 text-slate-950"
                >Googleでログイン</button>
            </div>
            <div></div>
            <div></div>
        </div>
    )

}