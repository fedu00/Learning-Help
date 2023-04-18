import React, { useState } from "react";
import "./AddFlashcardDeckStyles.css";
import { Card, Deck } from "../../../types/flashCardsTypes";

interface AddFlashcardDeckProps {
  handleCreateDeck: (params: boolean) => void;
  setDecksFlashcards: (params: any) => void;
}

const AddFlashcardDeck = ({
  handleCreateDeck,
  setDecksFlashcards,
}: AddFlashcardDeckProps) => {
  const [deckTitle, setDeckTitle] = useState("");
  const [titleConfirm, setTitleConfirm] = useState(false);
  const [cardValue, setCardValue] = useState<Card>({
    frontCard: "",
    backCard: "",
  });
  const [deckFlashcards, setDeckFlashcards] = useState<Card[]>([]);
  const handleDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckTitle(e.target.value);
  };
  const handleConfirmTitle = () => {
    if (deckTitle) {
      setTitleConfirm(true);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleAddFlashcard = () => {
    setDeckFlashcards((prevValue) => [...prevValue, cardValue]);
    setCardValue({ frontCard: "", backCard: "" });
  };

  return (
    <div className="deck-wrapper">
      {titleConfirm ? (
        <div className="add-flashcard-wrapper">
          <p>{deckTitle}</p>
          <input
            type="text"
            value={cardValue.frontCard}
            name="frontCard"
            onChange={handleChange}
          />
          <input
            type="text"
            value={cardValue.backCard}
            name="backCard"
            onChange={handleChange}
          />
          <button onClick={handleAddFlashcard}>add flashcard</button>
          <button
            onClick={() => {
              setDecksFlashcards((prevValue: Deck[]) => [
                ...prevValue,
                { title: deckTitle, cards: deckFlashcards },
              ]);
              handleCreateDeck(false);
            }}
          >
            create deck
          </button>
          <p>{deckFlashcards.length}</p>
        </div>
      ) : (
        <div className="deck-title-container">
          <p>title</p>
          <input
            type="text"
            value={deckTitle}
            name="deckTitle"
            onChange={handleDeckTitle}
          />
          <button onClick={handleConfirmTitle}>confim title</button>
        </div>
      )}
    </div>
  );
};

export default AddFlashcardDeck;
