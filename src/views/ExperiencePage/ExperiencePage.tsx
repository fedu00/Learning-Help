import React from "react";
import "./ExperiencePageStyles.css";

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <div className="exp-lvl-contaioner">
        <text className="lvl">7</text>
        <text>lvl</text>
      </div>
      <div className="exp-score">
        <text className="exp-score-amount">12</text>
        <text>utworzone notatki</text>
      </div>
      <div className="exp-score">
        <text className="exp-score-amount">3</text>
        <text>ukończone serie pomodore</text>
      </div>
      <div className="exp-score">
        <text className="exp-score-amount">22</text>
        <text>utworzone fiszki</text>
      </div>
    </div>
  );
};

export default ExperiencePage;
