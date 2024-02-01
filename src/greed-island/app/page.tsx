import { Header } from "./Header"
import { User } from "@/domain/User"
import { uuidv7 } from "uuidv7"

export default function Home() {

  const user = new User(uuidv7(), 'ゲスト', 'です男')

  return (
    <div>
      <Header user={user} />
    </div>
  )
}