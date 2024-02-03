import { Player } from "@/domain/player/Player";
import { Name } from "../organism/Name";

interface Props {
  player: Player;
}

export function Status(props: Props) {
  return (
    <div className="flex flex-col">
      <Name name={props.player.fullName} level={props.player.level}></Name>
    </div>
  );
}
