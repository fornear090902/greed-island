import { Status } from "@/components/player/template/Status"
import { Player } from "@/domain/player/Player"

interface Props {
  player: Player | null
}

export default function Home(props: Props) {

  return (
    <div>
      {
        props.player
          ? <Status player={props.player}></Status>
          : <div>Not logged in</div>
      }
    </div>
  )
}