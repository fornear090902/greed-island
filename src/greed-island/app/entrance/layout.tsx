import { Title } from "./Title"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full bg-slate-900 flex flex-row justify-center">
            <div className="flex flex-col">
                <Title />
                <div className="flex flex-row justify-center h-1/2">{children}</div>
            </div>
        </div>
    )
}