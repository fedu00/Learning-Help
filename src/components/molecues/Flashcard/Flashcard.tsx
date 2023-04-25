import "./FlashcardStyles.css";

interface FlashcardProps {
  title: string;
  index: number;
  setCurrentField: (param: string) => void;
  setCurrentDeck: (param: number) => void;
  deleteFLashcardsDeck: (param: number) => void;
}

const Flashcard = ({
  title,
  index,
  setCurrentField,
  setCurrentDeck,
  deleteFLashcardsDeck,
}: FlashcardProps) => {
  const handleStartTest = () => {
    setCurrentField("test");
    setCurrentDeck(index);
  };

  return (
    <div className="flashcard-element">
      <h1>{title}</h1>
      <div>
        <button onClick={handleStartTest}>start Learning</button>
        <button onClick={() => deleteFLashcardsDeck(index)}>delete deck</button>
      </div>
    </div>
  );
};

export default Flashcard;
