import React, { useState } from "react";
import "./FlashcardTestStyles.css";
import TestResults from "../../atoms/TestResults/TestResults";
import { Deck } from "../../../types/flashCardsTypes";

interface FlashcardDeckProps {
  deck: Deck;
  setCurrentField: (param: string) => void;
}

const FlashcardTest = ({ deck, setCurrentField }: FlashcardDeckProps) => {
  const [numberOfCard, setNumberOfCard] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finishTest, setFinishTest] = useState<boolean>(false);

  const itIsLastQuestion: boolean = numberOfCard + 1 === deck.cards.length;

  const handleShowAnswer = (): void => {
    setShowAnswer(!showAnswer);
  };

  const handleAnswerTheQuestion = (answer: string): void => {
    setShowAnswer(false);
    setAnswers((prevValue) => [...prevValue, answer]);
    if (itIsLastQuestion) {
      setFinishTest(true);
    } else {
      setNumberOfCard(numberOfCard + 1);
    }
  };

  return (
    <div className="deck-cards-wrapper">
      {finishTest ? (
        <TestResults
          answers={answers}
          closeFunction={setFinishTest}
          resetTest={setNumberOfCard}
          setCurrentField={setCurrentField}
        />
      ) : (
        <div>
          <h1>{deck.title}</h1>
          <p className="flashcard-front flashcard-context">
            {deck.cards[numberOfCard].frontCard}
          </p>

          <div className="answer-wrapper">
            {showAnswer ? (
              <div>
                <p
                  className={`flashcard-back flashcard-context ${
                    showAnswer ? "show" : "hide"
                  }`}
                >
                  {deck.cards[numberOfCard].backCard}
                </p>
                <button onClick={() => handleAnswerTheQuestion("ok")}>
                  yes
                </button>
                <button onClick={() => handleAnswerTheQuestion("wrong")}>
                  no
                </button>
              </div>
            ) : (
              <button onClick={handleShowAnswer}>show</button>
            )}
          </div>
          <div className="deck-page-control">
            <p>{`${numberOfCard + 1} / ${deck.cards.length}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardTest;
