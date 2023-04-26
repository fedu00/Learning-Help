import { createStore } from "redux";
import { PomodoreDateTypes } from "../types/pomodoreTypes";

export const createPomodoro = (payload: PomodoreDateTypes) => {
  return {
    type: "start/work",
    payload,
  };
};

const inicialState = {
  pomodoro: [
    {
      workTime: 0,
      breakTime: 0,
      numberOfIntervals: 0,
      workON: false,
    },
  ],
};

const pomodoroReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "start/work":
      return {
        ...state,
        pomodoro: [action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(pomodoroReducer);
