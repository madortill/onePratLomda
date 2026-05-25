import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import story from "../assets/images/ItayStory.png";
import TypewriterText from "./TypewriterText";

function FixPractice({ changePage, startPage }) {
    const [finishStory, setFinishStory] = useState(false);
  const previousPage = () => {
    changePage(4);
  };
  const nextPage = () => {
    changePage(6);
  };
  const textLines = [
    "ביום ראשון 26/04/26, ",
    "רב”ט איתי רוזנבליט המשרת בבה”ד 11 ",
    " היה בבית בחופשה שנתית אך שכח לעדכן",
    " בדו”ח 1 וסימן שהוא נמצא ביחידה.",
    "המפקדת של איתי לא שמה לב לפער ",
    "בדיווח ואישרה את הדיווח שלו.",
    "קצינת המשא”ן סגרה את הדו”ח כרגיל.",
    "לאחר חמישה ימים המפקדת של איתי ",
    "שמה לב לשינוי בימי החופש שלו והתקשרה ",
    "לקצינת המשא”ן. ",
  ];
  return (
    <div className="FixPractice">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className={`nextBtn ${finishStory ? "" : "nextBtnDisable"}`}  onClick={finishStory ? nextPage : undefined} />
      <p className="title">תיקון הדו”ח</p>
      <div className="FixPractice-story">
        <div className="FixPractice-text">
          <TypewriterText
            lines={textLines}
            onComplete={() => setFinishStory(true)}
          />
        </div>
        <img src={story} alt="story" className="ItayStory" />
      </div>
    </div>
  );
}

export default FixPractice;
