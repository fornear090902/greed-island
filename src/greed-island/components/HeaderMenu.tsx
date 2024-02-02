import { Player } from "@/domain/player/Player";
import { library } from "@/lib/japanese";
import type { Dispatch } from "react";
import { uuidv7 } from "uuidv7";

interface Props {
    user: Player | null,
    setUser: Dispatch<Player | null>
}

export function HeaderMenu(props: Props) {

    const defaultUser = new Player(uuidv7(), 'ゲスト', 'です男')

    const login = () => props.setUser(defaultUser)
    const logout = () => props.setUser(null)

    return (
        <div className="flex flex-row h-full p-2 font-bold">
            {
                props.user &&
                <div className="flex flex-col mx-1 justify-center">
                    <div>{library.welcomeMessage} {props.user.fullName} {library.honorificSymbol}</div>
                </div>
            }
            <div className="flex flex-col justify-center mx-1 my-2 px-2 hover:bg-gray-300 rounded-md">
                {
                    props.user
                        ? <button onClick={logout}>{library.logout}</button>
                        : <button onClick={login}>{library.login}</button>
                }
            </div>
        </div>
    )

}