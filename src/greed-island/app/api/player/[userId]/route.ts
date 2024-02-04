import { PlayerRepository } from "@/domain/player/repository/PlayerRepository";

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } },
) => {
  const repository = new PlayerRepository();
  const player = await repository.findByUserId(params.userId);

  return new Response(JSON.stringify(player));
};
