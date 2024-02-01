import type { User } from "@/domain/User";
import { library } from "@/lib/japanese";

interface Props {
    user: User
}

export function Header(props: Props) {
    return (
        <>
            <h1 className="text-4xl font-bold">{library.title}</h1>
            <div className="container p-2">
                <div>{library.welcomeMessage} {props.user.fullName} {library.honorificSymbol}</div>
            </div>
        </>
    )
}