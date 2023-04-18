export interface Card {
  frontCard: string;
  backCard: string;
  number?: number;
}
export interface Deck {
  title: string;
  cards: Card[];
}
