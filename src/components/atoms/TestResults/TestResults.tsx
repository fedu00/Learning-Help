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
      <button onClick={handleCloseTestResults}>close</button>
    </div>
  );
};

export default TestResults;
