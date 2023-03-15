import Clock from "../molecues/Clock/Clock";
import NavBar from "../molecues/NavBar/NavBar";
import "./MainTemplateStyles.css";
import { useSelector } from "react-redux";

const MainTemplate = ({ children }) => {
  const pomodore = useSelector((state) => state.pomodoro[0]);

  return (
    <div className="main-template-container">
      <NavBar />
      {pomodore.workON ? <Clock /> : null}
      {children}
    </div>
  );
};

export default MainTemplate;
