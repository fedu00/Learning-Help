import NavBar from "../molecues/NavBar/NavBar";
import "./MainTemplateStyles.css";

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template-container">
      <NavBar />
      {children}
    </div>
  );
};

export default MainTemplate;
