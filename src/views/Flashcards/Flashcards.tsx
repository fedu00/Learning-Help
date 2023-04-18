import React, { useState } from "react";
import "./FlashcardsStyles.css";
import { ReactComponent as AddIcon } from "../../assets/icons/addIcon.svg";
import AddFlashcardDeck from "../../components/molecues/AddFlashcardDeck/AddFlashcardDeck";
import FlashcardDeck from "../../components/molecues/FlashcardDeck/FlashcardDeck";
import { Deck } from "../../types/flashCardsTypes";

const Flashcards = () => {
  const [decksFlashcards, setDecksFlashcards] = useState<Deck[]>([]);
  const [createDeckOfFlashcards, setCreateDeckOfFlashcards] =
    useState<boolean>(false);

  const handleAddFlashcardsGroup = () => {
    setCreateDeckOfFlashcards(true);
  };

  const handleDeleteFlashcard = (
    deckIndex: number,
    numberOfCard: number,
    numberOfCardsInTheDeck: number
  ) => {
    setDecksFlashcards((prevValue) => {
      if (numberOfCardsInTheDeck === 1) {
        return [...prevValue.filter((deck, index) => index !== deckIndex)];
      }

      return [
        ...prevValue.map((element, index) => {
          if (index === deckIndex) {
            const title = element.title;
            const cards = element.cards.filter(
              (Flashcard, index) => index !== numberOfCard
            );
            return { title, cards };
          } else {
            return element;
          }
        }),
      ];
    });
  };

  return (
    <div className="wrapper">
      {createDeckOfFlashcards ? (
        <AddFlashcardDeck
          handleCreateDeck={setCreateDeckOfFlashcards}
          setDecksFlashcards={setDecksFlashcards}
        />
      ) : (
        <div className="decks-wrapper">
          <AddIcon onClick={handleAddFlashcardsGroup} />
          {decksFlashcards.map((deck, index) =>
            deck === undefined ? null : (
              <FlashcardDeck
                key={index}
                deck={deck}
                handleDeleteFlashcard={handleDeleteFlashcard}
                deckIndex={index}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Flashcards;
