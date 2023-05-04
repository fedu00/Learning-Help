import Button from "../Button/Button";
import "./TestResultsStyles.css";

interface TestResultsProps {
  answers: string[];
  closeFunction: (param: boolean) => void;
  resetTest: (param: number) => void;
  setCurrentField: (param: string) => void;
}

const TestResults = ({
  answers,
  closeFunction,
  resetTest,
  setCurrentField,
}: TestResultsProps) => {
  const handleCloseTestResults = (): void => {
    closeFunction(false);
    resetTest(0);
    setCurrentField("");
  };

  return (
    <div className="test-results-wrapper">
      <h2>Your results</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <Button
        text="close"
        onClickFunction={handleCloseTestResults}
        backgroundColor="black"
      />
    </div>
  );
};

export default TestResults;
