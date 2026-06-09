import React from 'react'
import { useState } from "react";
import "../css/Closing.css";

import TypewriterText from "./TypewriterText";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

import story from "../assets/images/chenStory.png";

function NoMatch({ onFinish, onBack }) {
    const [page, setPage] = useState(0);
  const [finishStory, setFinishStory] = useState(true);
  const textLines = [
    "חן התרגשה מאוד לקראת חג הנובי גוד בו ",
    " היא תוכל לצאת הביתה ולחגוג עם משפחתה.",
    "בהתאם לכך, חן נכנסה למערכת והזינה",
    "דוח 1 עבור חג עדתי, כפי שמקובל במקרים",
    " של חופשה לרגל חג מיוחד.",
    "עם זאת, המפקד של חן לא שם לב שמדובר",
    "בחופשה שאושרה לכבוד חג הנובי גוד.",
    "מתוך חוסר תשומת לב, הוא סימן את יום",
    "ההיעדרות שלה כחופשה שנתית רגילה."
  ];
  const previousPage = () => {
    if (page === 0) {
      onBack();
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page === 1) {
      onFinish();
    } else {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className='NoMatch'>
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${
          finishStory && page === 0 ? "" : "nextBtnDisable"
        }`}
        onClick={finishStory && page === 0 ? nextPage : undefined}
      />

      <p className="title"> אי התאמה</p>

      {page === 0 && (
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
        <div className="systemWarning-question">
          <MultipleChoiceQuestion
            question={"מה קצין המשא\"ן צריך לעשות?"}
            answers={[
                "תשובה 1",
                "תשובה 2",
                "תשובה 3",
                "תשובה 4"
            ]}
            correctAnswers={["תשובה 4"]}
            onQuestionCompleted={() => {
              setTimeout(() => {
                nextPage();
              }, 500);
            }}
          />
        </div>
      )}
    </div>
  )
}

export default NoMatch
