import { Card } from "./Card";

export class CardDeck {
  constructor(private cards: Card[]) {}

  addCard(card: Card) {
    this.cards.push(card);
  }

  removeCard(card: Card) {
    this.cards = this.cards.filter((c) => !c.equalTo(card));
  }
}
