'use client';

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
    const { data: session, status } = useSession();
    const [path, setPath] = useState<string>("/main");
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            if (session?.player) {
                setPath("/main");
            } else {
                setPath("/entrance/createPlayer");
            }
        }
    }, [status, session]);

    const start = () => router.push(path);

    return (
        <div className="flex flex-col justify-evenly">
            <div>
                {status === 'loading' && <div>loading...</div>}
                {status === 'unauthenticated' && (
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/entrance" })}
                        className="px-6 py-4 rounded-lg text-3xl bg-white hover:bg-slate-200 border-2 border-slate-950 text-slate-950"
                    >Googleでログイン</button>
                )}
                {status === 'authenticated' && (
                    <button
                        onClick={start}
                        className="px-6 py-4 rounded-lg text-3xl bg-white hover:bg-slate-200 border-2 border-slate-950 text-slate-950"
                    >Start</button>
                )}
            </div>
            <div></div>
            <div></div>
        </div>
    )
}