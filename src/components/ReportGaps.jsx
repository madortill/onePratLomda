import React from "react";
import { useState } from "react";
import "../css/Closing.css";

import TypewriterText from "./TypewriterText";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

import story from "../assets/images/sapirStory.png";

function ReportGaps({ onFinish, onBack }) {
  const [page, setPage] = useState(0);
  const [finishStory, setFinishStory] = useState(true);
  const textLines = [
    "השבוע העמוס של ספיר הרוש התחיל בבלבול:",
    "היא חשבה שהזינה דו״ח 1 עתידי כבר ביום ",
    "חמישי, ולכן הגיעה בראשון לבסיס בלי לבדוק",
    "שוב את האפליקציה. במקביל המפקד שלה,",
    "היה בהשתלמות בבסיס מרוחק ולא שם לב ",
    "שברשימות השלישות מופיע חוסר בדיווח.",
    "כך ספיר עבדה כרגיל, בלי לדעת שלא הוזן",
    "    עליה דו״ח 1.",
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
    <div className="ReportGaps">
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

      <p className="title"> פערי דיווח</p>

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
            correctAnswers={["תשובה 3"]}
            onQuestionCompleted={() => {
              setTimeout(() => {
                nextPage();
              }, 500);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ReportGaps;
