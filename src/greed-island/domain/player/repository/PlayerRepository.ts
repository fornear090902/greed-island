import { Repository } from "@/lib/Repository";
import { Player } from "../model/Player";
import { Level } from "../model/Level";

export interface IPlayerRepository {
  save(player: Player): void;
  delete(id: string): void;
  findByUserId(userId: string): Promise<Player | null>;
}

export class PlayerRepository
  extends Repository<Player>
  implements IPlayerRepository
{
  async save(player: Player): Promise<Player> {
    const result = await this.prisma.player.upsert(
      {
        where: { userId: player.userId },
        create: {
          name: player.name,
          level: player.level.value,
          userId: player.userId,
        },
        update: {
          name: player.name,
          level: player.level.value,
        },
      },
    );
    return new Player(
      result.id,
      result.name,
      new Level(result.level),
      result.userId,
    );
  }

  async delete(id: string): Promise<void> {
    this.prisma.player.delete({
      where: { id },
    });
  }

  async findByUserId(userId: string): Promise<Player | null> {
    const result = await this.prisma.player.findFirst({
      where: { userId },
    });
    return result
      ? new Player(
          result.id,
          result.name,
          new Level(result.level),
          result.userId,
        )
      : null;
  }
}
