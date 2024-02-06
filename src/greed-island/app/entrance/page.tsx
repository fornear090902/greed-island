'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";
import { clientApi } from "../_trpc/client-api";
import { redirect } from "next/navigation";


export default function Page() {
    const { data: session, status } = useSession();
    const [ path, setPath ] = useState<string>("/entrance/signin");
    const mutation = clientApi.getPlayerByUserId.useMutation();

    if (session?.userId && mutation.isIdle) {
        mutation.mutate({userId: session.userId});
    }

    if (status === 'unauthenticated') {
        setPath("/enrance/signin");
    } else if (mutation.isSuccess && mutation.data) {
        setPath('/main')
    }

    const start = () => redirect(path);

    return (
        <div className="flex flex-col justify-evenly">
            <div>
                <button
                    onClick={start}
                    className="px-6 py-4 rounded-lg text-3xl bg-white hover:bg-slate-200 border-2 border-slate-950"
                >Start</button>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}