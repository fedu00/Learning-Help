import { useEffect, useState } from "react";
import "./ClockStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { createPomodoro } from "../../../store";

const Clock = () => {
  const pomodore = useSelector((state) => state.pomodoro[0]);
  const [minutes, setMinutes] = useState(pomodore.workTime);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [workInterval, setWorkInterval] = useState(pomodore.numberOfIntervals);
  const [breakMinutes, setBreakMinutes] = useState(pomodore.breakTime);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setMinutes(pomodore.workTime);
    setBreakMinutes(pomodore.breakTime);
    setWorkInterval(pomodore.numberOfIntervals);
  }, [pomodore]);

  useEffect(() => {
    if (workInterval !== 0) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (!isBreak) {
          if (seconds === 0) {
            if (minutes !== 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            } else {
              setIsBreak(true);
              setMinutes(pomodore.workTime);
              setWorkInterval(workInterval - 1);
            }
          } else {
            setSeconds(seconds - 1);
          }
        } else {
          if (breakSeconds === 0) {
            if (breakMinutes !== 0) {
              setBreakSeconds(59);
              setBreakMinutes(breakMinutes - 1);
            } else {
              setIsBreak(false);
              setBreakMinutes(pomodore.breakTime);
            }
          } else {
            setBreakSeconds(breakSeconds - 1);
          }
        }
      }, 1000);
    } else if (pomodore.workON) {
      dispatch(
        createPomodoro({
          workTime: 0,
          breakTime: 0,
          numberOfIntervals: 0,
          workON: false,
        })
      );
    }
  }, [minutes, seconds, isBreak, breakSeconds, breakMinutes, workInterval]);

  const currentMinutes = isBreak ? breakMinutes : minutes;
  const currentSeconds = isBreak ? breakSeconds : seconds;
  const timerMinutes =
    currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  const timerSeconds =
    currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
  return (
    <div className="clock-container">
      <div className="intervals">
        <p className="number-of-intervals">{workInterval}</p>
        <p>INTERWALS</p>
      </div>
      <div className="time-container">
        <div className="clock-time">{timerMinutes}:</div>
        <div className="clock-time">{timerSeconds}</div>
      </div>
      <div>
        <p>{isBreak ? "BREAK" : "Work!"}</p>
      </div>
    </div>
  );
};

export default Clock;
