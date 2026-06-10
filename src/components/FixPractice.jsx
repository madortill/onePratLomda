import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import story from "../assets/images/ItayStory.png";
import notes from "../assets/images/ItayNotes.svg";
import ktzina from "../assets/images/ktzina.png";

import TypewriterText from "./TypewriterText";
import ItayScreenSvg from "./ItayScreenSvg";

function FixPractice({ changePage, startPage, isReviewMode }) {
  const [page, setPage] = useState(startPage);
  const [finishStory, setFinishStory] = useState(true);
  const [finishedPractice, setFinishedPractice] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changePage(4);
    } else {
      setPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (page === 1) {
      changePage(6);
    } else {
      setPage((prev) => prev + 1);
    }
  };
  const canGoNext =
  isReviewMode
    ? true
    : startPage !== 0
    ? true
    : page === 0
    ? finishStory
    : page === 1
    ? finishedPractice
    : true;
  const textLines = [
    "ביום רביעי 06/05/26, ",
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
      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${canGoNext ? "" : "nextBtnDisable"}`}
        onClick={canGoNext ? nextPage : undefined}
      />
      <p className="title">תיקון הדו”ח</p>
      {page > 0 && (
        <p className="FixPractice-note">
          תקן את הדו”ח והוסף הסבר או תחקיר חתום בהתאם למקרה של איתי
        </p>
      )}
      {page == 0 && (
        <div className="FixPractice-story">
          <div className="FixPractice-text">
            <TypewriterText
              lines={textLines}
              onComplete={() => setFinishStory(true)}
            />
          </div>
          <img src={story} alt="story" className="ItayStory" />
        </div>
      )}
      {page === 1 && (
        <div className="Itay-notes">
          <button
            className={`textBtn textBtn-FixPractice`}
            onClick={() => {
              setIsPopOpen((prev) => !prev);
            }}
          >
            {" "}
            {isPopOpen ? "סגירת התזכורת" : "תזכורת לפרטים"}
          </button>
          {isPopOpen && page === 1 && (
            <img src={notes} alt="notes" className="Itay-notes-img" />
          )}
        </div>
      )}
      {page === 1 && (
        <ItayScreenSvg
          className="ItayScreenSvg"
          setFinishedPractice={setFinishedPractice}
        />
      )}
      {finishedPractice && page === 1 && (
        <div className="ktzina-bubble ktzina-bubble-FixPractice">
          <div className="bubble bubble-FixPractice">
            <p className="boldText">כל הכבוד!</p>
            <p>
              אם השינוי נעשה אחרי פחות מ-10 ימים אז יש לכתוב הסבר ב"הערת משתמש"
            </p>
          </div>
          <img src={ktzina} alt="ktzina" className="ktzina-FixPractice" />
        </div>
      )}
    </div>
  );
}

export default FixPractice;
