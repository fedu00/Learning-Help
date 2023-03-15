import { useState } from "react";
import "./PomodorePageStyles.css";
import { useDispatch } from "react-redux";
import { createPomodoro } from "../../store";

const PomodorePage = (props) => {
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [numberOfIntervals, setNumberOfIntervals] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      createPomodoro({
        workTime: workTime,
        breakTime: breakTime,
        numberOfIntervals: numberOfIntervals,
        workON: true,
      })
    );
  };
  const handleMinutesChange = (event) => {
    const { value } = event.target;
    setWorkTime(value);
  };
  const handleBreakChange = (event) => {
    const { value } = event.target;
    setBreakTime(value);
  };

  const handleIntervalsChange = (event) => {
    const { value } = event.target;
    setNumberOfIntervals(value);
  };

  return (
    <div className="section-container">
      <div className="pomodore-container">
        <div className="timer-container">
          <input
            type="number"
            value={workTime}
            onChange={handleMinutesChange}
          />
          <input type="number" value={breakTime} onChange={handleBreakChange} />
          <input
            type="number"
            value={numberOfIntervals}
            onChange={handleIntervalsChange}
          />
        </div>
        <div className="timer-buttons-container">
          <button onClick={handleClick}>start</button>
        </div>
      </div>
    </div>
  );
};

export default PomodorePage;
