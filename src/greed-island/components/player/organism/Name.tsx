import { Level } from "@/domain/player/Level";
import { Player } from "@/domain/player/Player";

interface Props {
  name: string;
  level: Level;
}

export function Name(props: Props) {
  return (
    <div className="flex flex-row justify-center p-1">
      <div className="text-3xl">{props.name}</div>
      <div className="absolute right-0 bottom-0">{props.level.format()}</div>
    </div>
  );
}
