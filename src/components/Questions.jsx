import React from "react";
import { useState } from "react";
import "../css/Summary.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ktzina from "../assets/images/ktzina.png";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

function Questions({ changePage, changeSection, startPage }) {
  const [page, setPage] = useState(startPage);
  const [canContinue, setCanContinue] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changeSection(5, true);
    } else {
      setPage(0);
    }
  };

  const nextPage = () => {
    changePage(1);
  };
  return (
    <div className="Questions">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}
        onClick={canContinue ? nextPage : undefined}
      />
      {page === 0 && <MultipleChoiceQuestion
        question="ק. אג”ם פנה אליכם בבקשה לשנות דוח 1 מלפני שבוע מ”חופשה שנתית” ל”חופשת מחלה” לחייל שלו מה עליכם לעשות כקציני משא”ן?"
        answers={[
          "לאשר את הבקשה",
          "לדחות את הבקשה",
          "לוודא מול המפקד את סיבת השינוי. להוסיף “הערת משתמש” בהתאם לסיבת השינוי - תיקון דו”ח בטווח קצר. לשנות את הדיווח השגוי לדיווח הנכון.",
          "לפנות לגורם מוסמך",
        ]}
        correctAnswers={["לוודא מול המפקד את סיבת השינוי. להוסיף “הערת משתמש” בהתאם לסיבת השינוי - תיקון דו”ח בטווח קצר. לשנות את הדיווח השגוי לדיווח הנכון."]}
        onQuestionCompleted={() => {
          setTimeout(() => {
            setPage(1);
          }, 500);
        }}
      />}
      {page === 1 && <MultipleChoiceQuestion
        question="בחר שני מקרים בהם נבצע נוהל עבודה ידני"
        answers={[
          "תרגיל / אימון יחידתי",
          "דיווח טלפוני",
          "קבלת אסמכתא",
          "חוסר במערכת",
          "העברת תקן",
          "אישור מפקד",
        ]}
        correctAnswers={[
          "תרגיל / אימון יחידתי",
          "העברת תקן",
        ]}
        onQuestionCompleted={() => setCanContinue(true)}
      />}
      {canContinue && page === 1 && (
        <div className="ktzina-bubble ktzina-bubble-FixPractice">
          <div className="bubble bubble-FixPractice">
            <p className="boldText">כל הכבוד!</p>
            <p>ענית על השאלות בהצלחה!</p>
          </div>

          <img src={ktzina} alt="ktzina" className="ktzina-FixPractice" />
        </div>
      )}
    </div>
  );
}

export default Questions;
