import React, { useState } from "react";
import "./FlashcardsStyles.css";
import { ReactComponent as AddIcon } from "../../assets/icons/addIcon.svg";
import AddFlashcardDeck from "../../components/molecues/AddFlashcardDeck/AddFlashcardDeck";
import FlashcardTest from "../../components/molecues/FlashcardTest/FlashcardTest";
import { Deck } from "../../types/flashCardsTypes";
import Flashcard from "../../components/molecues/Flashcard/Flashcard";

const Flashcards = () => {
  const [decksFlashcards, setDecksFlashcards] = useState<Deck[]>([]);
  const [currentDeck, setCurrentDeck] = useState<number>(0);
  const [currentField, setCurrentField] = useState<string>("");

  const handleAddFlashcardsGroup = (): void => {
    setCurrentField("addFlashcard");
  };

  const deleteFLashcardsDeck = (id: number): void => {
    setDecksFlashcards((prevValue) => {
      return [...prevValue.filter((deck, deckindex) => deckindex !== id)];
    });
  };

  return (
    <div className="wrapper">
      <AddIcon onClick={handleAddFlashcardsGroup} />
      {(() => {
        switch (currentField) {
          case "test":
            return (
              <FlashcardTest
                deck={decksFlashcards[currentDeck]}
                setCurrentField={setCurrentField}
              />
            );
          case "addFlashcard":
            return (
              <AddFlashcardDeck
                setDecksFlashcards={setDecksFlashcards}
                setCurrentField={setCurrentField}
              />
            );
          default:
            return decksFlashcards.map((deck, index) =>
              deck === undefined ? null : (
                <Flashcard
                  title={deck.title}
                  key={index}
                  index={index}
                  setCurrentField={setCurrentField}
                  setCurrentDeck={setCurrentDeck}
                  deleteFLashcardsDeck={deleteFLashcardsDeck}
                />
              )
            );
        }
      })()}
    </div>
  );
};

export default Flashcards;
