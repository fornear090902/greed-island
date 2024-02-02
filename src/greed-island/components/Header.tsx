import type { Player } from "@/domain/player/Player";
import { library } from "@/lib/japanese";
import type { Dispatch } from "react";
import { HeaderMenu } from "./HeaderMenu";

interface Props {
    user: Player | null,
    setUser: Dispatch<Player | null>
}

export function Header(props: Props) {
    return (
        <div className="border-b-2 border-b-gray-300 bg-gray-200 flex flex-row justify-between content-end">
            <h1 className="text-4xl font-bold p-4">{library.title}</h1>
            <HeaderMenu user={props.user} setUser={props.setUser}></HeaderMenu>
        </div>
    )
}