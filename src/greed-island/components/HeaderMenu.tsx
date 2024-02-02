import { Warrior } from "@/domain/job/Warrior";
import { Experience } from "@/domain/player/Experience";
import { Level } from "@/domain/player/Level";
import { Player } from "@/domain/player/Player";
import { Status } from "@/domain/player/Status";
import { library } from "@/lib/japanese";
import type { Dispatch } from "react";
import { uuidv7 } from "uuidv7";

interface Props {
    user: Player | null,
    setUser: Dispatch<Player | null>
}

export function HeaderMenu(props: Props) {

    const defaultUser = getDefaultUser()

    const login = () => props.setUser(defaultUser)
    const logout = () => props.setUser(null)

    return (
        <div className="header-menu">
            {
                props.user &&
                <div className="welcome-msg">
                    <div>{library.welcomeMessage} {props.user.fullName} {library.honorificSymbol}</div>
                </div>
            }
            <div className="login-btn">
                {
                    props.user
                        ? <button onClick={logout}>{library.logout}</button>
                        : <button onClick={login}>{library.login}</button>
                }
            </div>
        </div>
    )

}

const getDefaultUser = () => {
    const level = new Level(1)
    const expereince = new Experience(0)
    const status = new Status(100, 50, 10, 10)
    const job = new Warrior()

    return new Player(uuidv7(), 'ゲスト', 'です男', level, status, expereince, job)
}