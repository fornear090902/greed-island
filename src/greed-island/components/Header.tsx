import type { User } from "@/domain/User";
import { library } from "@/lib/japanese";

interface Props {
    user: User
}

export function Header(props: Props) {
    return (
        <div className="border-b-2 border-b-gray-300 bg-gray-200 px-6 py-4 flex flex-row justify-between content-end">
            <h1 className="text-4xl font-bold">{library.title}</h1>
            <div className="flex flex-col justify-end">
                <div>{library.welcomeMessage} {props.user.fullName} {library.honorificSymbol}</div>
            </div>
        </div>
    )
}