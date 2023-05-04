import Button from "../../atoms/Button/Button";
import "./FlashcardDeckStyles.css";

interface FlashcardDeckProps {
  title: string;
  index: number;
  setCurrentField: (param: string) => void;
  setCurrentDeck: (param: number) => void;
  deleteFLashcardsDeck: (param: number) => void;
}

const FlashcardDeck = ({
  title,
  index,
  setCurrentField,
  setCurrentDeck,
  deleteFLashcardsDeck,
}: FlashcardDeckProps) => {
  const handleStartTest = () => {
    setCurrentField("test");
    setCurrentDeck(index);
  };

  return (
    <div className="flashcard-element">
      <h1>{title}</h1>
      <div>
        <Button
          text="start Learning"
          onClickFunction={handleStartTest}
          backgroundColor="rgb(84, 179, 235)"
        />
        <Button
          text="delete deck"
          onClickFunction={() => deleteFLashcardsDeck(index)}
          backgroundColor="rgb(236, 103, 103)"
        />
      </div>
    </div>
  );
};

export default FlashcardDeck;
