import { Title } from "./Title"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            <Title />
            <div className="flex flex-row justify-center h-1/2">{children}</div>
        </div>
    )
}