import { CardSpec } from "./CardSpec";

export class Card {
  constructor(
    private id: string,
    private Spec: CardSpec,
  ) {}

  equalTo(card: Card) {
    return this.id === card.id;
  }
}
