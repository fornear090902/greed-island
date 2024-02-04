import { Level } from "@/domain/player/model/Level";
import { Player } from "@/domain/player/model/Player";
import { PlayerRepository } from "@/domain/player/repository/PlayerRepository";

interface CreatePlayerRequestParams {
  userId: string;
  name: string;
}

export const POST = async (req: Request) => {
  const { userId, name }: CreatePlayerRequestParams = await req.json();

  const player = new Player(undefined, name, new Level(1), userId);
  const repository = new PlayerRepository();

  const newPlayer = await repository.create(player);

  return new Response(JSON.stringify(newPlayer))
};

