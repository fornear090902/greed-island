'use client';

import { useSession } from "next-auth/react";

export default function Page() {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col justify-evenly">
            <div>
                <button
                    className="px-6 py-4 rounded-lg text-3xl bg-white hover:bg-slate-200 border-2 border-slate-950"
                >Start</button>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}