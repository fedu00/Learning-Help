import "./NavBarStyles.css";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as PomodoroIcon } from "../../../assets/icons/pomodoro.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
import { ReactComponent as PlanIcon } from "../../../assets/icons/plan.svg";
import { ReactComponent as NotesIcon } from "../../../assets/icons/notes.svg";
// import NotesSvg from "../../../assets/icons/notes";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState("notes");
  return (
    <div className="NavBarContainer">
      <NavLink
        to="/learning.help/"
        onClick={() => setActiveIcon("notes")}
        className="link"
      >
        <NotesIcon className={activeIcon === "notes" ? "active" : null} />
      </NavLink>
      <NavLink
        to="/pomodore"
        onClick={() => setActiveIcon("pomodore")}
        className="link"
      >
        <PomodoroIcon className={activeIcon === "pomodore" ? "active" : null} />
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
