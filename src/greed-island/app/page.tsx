import { User } from "@/domain/User"
import { library } from "@/lib/japanese"
import { uuidv7 } from "uuidv7"

export default function Home() {

  const user = new User(uuidv7(), 'ゲスト', 'です男')

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">{ library.title }</h1>
      <div className="container p-2">
        <div>Welcome, { user.fullName } さん</div>
      </div>
    </main>
  )
}