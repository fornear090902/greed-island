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
        <div className="header">
            <h1 className="product-title">{library.title}</h1>
            <HeaderMenu user={props.user} setUser={props.setUser}></HeaderMenu>
        </div>
    )
}