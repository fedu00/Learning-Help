import "./TestResultsStyles.css";

interface TestResultsProps {
  answers: string[];
  closeFunction: (param: boolean) => void;
  resetTest: (param: number) => void;
}

const TestResults = ({
  answers,
  closeFunction,
  resetTest,
}: TestResultsProps) => {
  return (
    <div className="test-results-wrapper">
      <h2>Results</h2>
      <ul>
        {answers.map((answer, index) => (
          <li>{answer}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          closeFunction(false);
          resetTest(0);
        }}
      >
        close
      </button>
    </div>
  );
};

export default TestResults;
