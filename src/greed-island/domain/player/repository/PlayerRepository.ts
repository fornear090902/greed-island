import { Repository } from "@/lib/Repository";
import { Player } from "../model/Player";
import { Level } from "../model/Level";

export interface IPlayerRepository {
  create(player: Player): void;
  delete(id: string): void;
}

export class PlayerRepository
  extends Repository<Player>
  implements IPlayerRepository
{
  async create(player: Player): Promise<Player> {
    const result = await this.prisma.player.create({
      data: {
        id: player.id,
        name: player.name,
        level: player.level.value,
        user: {
          connect: {
            id: player.userId,
          }
        }
      },
    });
    return new Player(result.id, result.name, new Level(result.level), result.userId);
  }

  async delete(id: string): Promise<void> {
    this.prisma.player.delete({
      where: { id },
    });
  }
}
