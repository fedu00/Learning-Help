import "./NavBarStyles.css";
import { ReactComponent as FlashCards } from "../../../assets/icons/flashcards.svg";
import { ReactComponent as PomodoroIcon } from "../../../assets/icons/pomodoro.svg";
import { ReactComponent as NotesIcon } from "../../../assets/icons/notes.svg";
// import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
// import { ReactComponent as PlanIcon } from "../../../assets/icons/plan.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <NavLink to="/study.help">
        <NotesIcon />
        <p>notes</p>
      </NavLink>
      <NavLink to="/pomodore">
        <PomodoroIcon />
        <p>pomodoro</p>
      </NavLink>
      <NavLink to="/flashcards">
        <FlashCards />
        <p>flashcards</p>
      </NavLink>
    </div>
  );
};

export default NavBar;
