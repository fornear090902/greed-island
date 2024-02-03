import { Player } from "../player/Player";
import { ButtleSetup, IButtleSetup } from "./ButtleSetup";

export interface IButtle {
  setup(player1: Player, player2: Player): void;
  start(): void;
  showResult(): void;
  finish(): void;
}

export class Buttle implements IButtle {
  constructor(
    private player1: Player,
    private player2: Player,
  ) {}

  setup(player1: Player, player2: Player): IButtle {
    const setup: IButtleSetup = new ButtleSetup();
    return setup.setup(player1, player2);
  }

  start(): void {
    // TODO: Implement start method
  }

  showResult(): void {
    // TODO: Implement showResult method
  }

  finish(): void {
    // TODO: Implement finish method
  }
}
