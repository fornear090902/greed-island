import { User } from "@/domain/User";
import { library } from "@/lib/japanese";
import type { Dispatch } from "react";
import { uuidv7 } from "uuidv7";

interface Props {
    user: User | null,
    setUser: Dispatch<User | null>
}

export function HeaderMenu(props: Props) {

    const defaultUser = new User(uuidv7(), 'ゲスト', 'です男')

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
            <div className="flex flex-col justify-center mx-1 my-2 px-2 hover:bg-gray-400 rounded-md">
                {
                    props.user
                        ? <button onClick={logout}>{library.logout}</button>
                        : <button onClick={login}>{library.login}</button>
                }
            </div>
        </div>
    )

}