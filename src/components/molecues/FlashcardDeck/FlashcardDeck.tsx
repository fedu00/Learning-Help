import React, { useState } from "react";
import "./FlashcardDeckStyles.css";
import TestResults from "../../atoms/TestResults/TestResults";
import { Deck } from "../../../types/flashCardsTypes";

interface FlashcardDeckProps {
  deck: Deck;
  handleDeleteFlashcard: (
    deckIndex: number,
    numberOfCard: number,
    numberOfCardsInTheDeck: number
  ) => void;
  deckIndex: number;
}

const FlashcardDeck = ({
  deck,
  handleDeleteFlashcard,
  deckIndex,
}: FlashcardDeckProps) => {
  console.log("deck", deck);
  console.log("handleDeleteFlashcard", handleDeleteFlashcard);
  console.log("deckIndex", deckIndex);

  const [numberOfCard, setNumberOfCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [startTest, setSTartTest] = useState(false);
  const [checkCorrectnessOfTheAnswer, setCheckCorrectnessOfTheAnswer] =
    useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finishTest, setFinishTest] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
    if (startTest && numberOfCard + 1 !== answers.length) {
      setCheckCorrectnessOfTheAnswer(!checkCorrectnessOfTheAnswer);
    }
  };

  const deleteFlashcard = () => {
    handleDeleteFlashcard(deckIndex, numberOfCard, deck.cards.length);
    if (numberOfCard > 0) {
      setNumberOfCard(numberOfCard - 1);
    }
  };

  const handleBackToThePreviousFlashcard = () => {
    if (numberOfCard > 0) {
      setNumberOfCard(numberOfCard - 1);
    }
    setShowAnswer(false);
  };

  const handleToMoveNextFlashcard = () => {
    if (startTest) {
      if (numberOfCard + 1 === deck.cards.length) {
        setSTartTest(false);
        setFinishTest(true);
      }
      setShowAnswer(false);
      if (!checkCorrectnessOfTheAnswer) {
        setAnswers((prevValue) => [...prevValue, "no"]);
      }
    }
    if (numberOfCard + 2 <= deck.cards.length) {
      setNumberOfCard(numberOfCard + 1);
    } else if (numberOfCard === 0 && deck.cards.length > 0) {
      setNumberOfCard(1);
    }
  };
  const handleAnswerTheQuestion = (answer: string) => {
    setCheckCorrectnessOfTheAnswer(false);
    if (startTest) {
      if (numberOfCard + 1 === deck.cards.length) {
        setSTartTest(false);
        setFinishTest(true);
      }

      if (numberOfCard === answers.length) {
        setShowAnswer(false);
        if (numberOfCard + 2 <= deck.cards.length) {
          setNumberOfCard(numberOfCard + 1);
        }
        setAnswers((prevValue) => [...prevValue, answer]);
      }
    }
  };

  const handleStartTest = () => {
    setSTartTest(true);
    setNumberOfCard(0);
    setAnswers([]);
    setFinishTest(false);
  };

  return (
    <div className="deck-cards-wrapper">
      {finishTest ? (
        <TestResults
          answers={answers}
          closeFunction={setFinishTest}
          resetTest={setNumberOfCard}
        />
      ) : null}
      {!startTest ? (
        <button className="test-button" onClick={handleStartTest}>
          start test
        </button>
      ) : null}
      <h1>{deck.title}</h1>
      <p className="flashcard-front flashcard-context">
        {deck.cards[numberOfCard].frontCard}
      </p>
      <div className="answer-wrapper">
        <p
          className={`flashcard-back flashcard-context ${
            showAnswer ? "show" : "hide"
          }`}
        >
          {deck.cards[numberOfCard].backCard}
        </p>
        <button onClick={handleShowAnswer}>
          {showAnswer ? "hide" : "show"}
        </button>
      </div>
      {!startTest ? (
        <div className="deck-buttons">
          <button onClick={deleteFlashcard}>delete flashcard</button>
        </div>
      ) : null}
      {startTest ? (
        <div className="deck-page-control">
          <p>{`${numberOfCard + 1} / ${deck.cards.length}`}</p>
          <button onClick={handleToMoveNextFlashcard}>
            {startTest && numberOfCard + 1 === deck.cards.length
              ? "finish test"
              : "next flashcard"}
          </button>
        </div>
      ) : (
        <div className="deck-page-control">
          <button onClick={handleBackToThePreviousFlashcard}>&lt;</button>
          <p>{`${numberOfCard + 1} / ${deck.cards.length}`}</p>
          <button onClick={handleToMoveNextFlashcard}>&gt;</button>
        </div>
      )}
      {checkCorrectnessOfTheAnswer ? (
        <div className="check-correct-of-the-answer">
          <p>Did you answer correctly?</p>
          <div className="check-correct-buttons-wrapper">
            <button onClick={() => handleAnswerTheQuestion("yes")}>yes</button>
            <button onClick={() => handleAnswerTheQuestion("no")}>no</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FlashcardDeck;
