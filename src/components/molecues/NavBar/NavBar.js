import "./NavBarStyles.css";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as PomodoroIcon } from "../../../assets/icons/pomodoro.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
import { ReactComponent as PlanIcon } from "../../../assets/icons/plan.svg";
import { ReactComponent as NotesIcon } from "../../../assets/icons/notes.svg";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <CalendarIcon />
      <PomodoroIcon />
      <ClockIcon />
      <PlanIcon />
      <NotesIcon />
    </div>
  );
};

export default NavBar;
