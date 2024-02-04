import { Player } from "../player/model/Player";
import { Buttle, IButtle } from "./Buttle";

export interface IButtleSetup {
  setup(player1: Player, player2: Player): IButtle;
}

export class ButtleSetup implements IButtleSetup {
  setup(player1: Player, player2: Player): Buttle {
    return new Buttle(player1, player2);
  }
}
