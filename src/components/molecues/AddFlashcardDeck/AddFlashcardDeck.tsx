import React, { useState, useRef } from "react";
import "./AddFlashcardDeckStyles.css";
import { Card, Deck } from "../../../types/flashCardsTypes";
import FormInput from "../../atoms/FormInput/FormInput";

interface AddFlashcardDeckProps {
  setDecksFlashcards: (params: any) => void;
  setCurrentField: (params: string) => void;
}

const AddFlashcardDeck = ({
  setDecksFlashcards,
  setCurrentField,
}: AddFlashcardDeckProps) => {
  const [deckTitle, setDeckTitle] = useState<string>("");
  const [cardValue, setCardValue] = useState<Card>({
    frontCard: "",
    backCard: "",
  });
  const [deckFlashcards, setDeckFlashcards] = useState<Card[]>([]);

  const titleRef = useRef<HTMLDivElement>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);

  const handleDeckTitle = (
    ref: any,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const doElementHasClassError = ref.current.classList.contains("error");
    if (doElementHasClassError) {
      ref.current.classList.remove("error");
    }
    setDeckTitle(e.target.value);
  };
  const handleInputChange = (
    ref,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const doElementHasClassError = ref.current.classList.contains("error");
    if (doElementHasClassError) {
      ref.current.classList.remove("error");
    }

    const { name, value } = e.target;
    setCardValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleAddFlashcard = (): void => {
    if (cardValue.frontCard && cardValue.backCard) {
      setDeckFlashcards((prevValue) => [...prevValue, cardValue]);
      setCardValue({ frontCard: "", backCard: "" });
    } else {
      if (cardValue.frontCard === "") {
        frontCardRef.current.classList.add("error");
      }
      if (cardValue.backCard === "") {
        backCardRef.current.classList.add("error");
      }
    }
  };

  const handleAddDeck = (): void => {
    setDecksFlashcards((prevValue: Deck[]) => [
      ...prevValue,
      { title: deckTitle, cards: deckFlashcards },
    ]);
    setCurrentField("");
  };

  const handleBackToMainView = (): void => {
    setCurrentField("");
  };

  return (
    <div className="add-flashcard-wrapper">
      <button className="back-button" onClick={handleBackToMainView}>
        back
      </button>
      <h1>here you can create your flashcards deck</h1>
      <FormInput
        reference={titleRef}
        type="text"
        value={deckTitle}
        name="title"
        onChange={(event) => handleDeckTitle(titleRef, event)}
        placeholder="title"
        errorMessage="you can't create deck with out title!"
      />
      <FormInput
        reference={frontCardRef}
        type="text"
        value={cardValue.frontCard}
        name="frontCard"
        onChange={(event) => handleInputChange(frontCardRef, event)}
        placeholder="frontCard"
        errorMessage="this field can't be  empy!"
      />
      <FormInput
        reference={backCardRef}
        type="text"
        value={cardValue.backCard}
        name="backCard"
        onChange={(event) => handleInputChange(backCardRef, event)}
        placeholder="backCard"
        errorMessage="this field can't be  empy!"
      />
      <button onClick={handleAddFlashcard}>add flashcard</button>
      <button disabled={deckFlashcards.length === 0} onClick={handleAddDeck}>
        create deck
      </button>
      <p>number of cards in the deck: {deckFlashcards.length}</p>
    </div>
  );
};

export default AddFlashcardDeck;
