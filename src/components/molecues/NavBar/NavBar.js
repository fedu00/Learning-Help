import "./NavBarStyles.css";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as PomodoroIcon } from "../../../assets/icons/pomodoro.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
import { ReactComponent as PlanIcon } from "../../../assets/icons/plan.svg";
import { ReactComponent as NotesIcon } from "../../../assets/icons/notes.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <NavLink to="/">
        {" "}
        <NotesIcon />
      </NavLink>
      <NavLink to="/pomodore">
        <PomodoroIcon />
      </NavLink>
      {/* <NavLink to="/">
        <CalendarIcon />
      </NavLink>
      <NavLink to="/">
        <ClockIcon />
      </NavLink>
      <NavLink to="/">
        <PlanIcon />
      </NavLink> */}
    </div>
  );
};

export default NavBar;
