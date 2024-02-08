import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { Player } from "@/domain/player/model/Player";
import { Level } from "@/domain/player/model/Level";
import { PlayerRepository } from "@/domain/player/repository/PlayerRepository";

export const appRouter = router({
  createPlayer: publicProcedure
    .input(z.object({ userId: z.string(), name: z.string().max(20) }))
    .mutation(async (opts) => {
      try {
        const player = new Player(
          undefined,
          opts.input.name,
          new Level(1),
          opts.input.userId,
        );
        const repository = new PlayerRepository();
        const newPlayer = await repository.save(player);
        return newPlayer;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to create player");
      }
    }),
  getPlayerByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async (opts) => {
      const repository = new PlayerRepository();
      const player = await repository.findByUserId(opts.input.userId);
      return player;
    })
});

export type AppRouter = typeof appRouter;
