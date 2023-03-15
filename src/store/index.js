import { createStore } from "redux";

export const createPomodoro = (payload) => {
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

//reducer
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
