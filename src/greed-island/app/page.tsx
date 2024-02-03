import { Signup } from "@/components/Signup"
import { Status } from "@/components/player/template/Status"
import { Player } from "@/domain/player/Player"

interface Props {
  player: Player | null
}

export default function Home(props: Props) {

  return (
    <>
      {
        props.player
          ? <Status player={props.player}></Status>
          : <Signup />
      }
    </>
  )
}