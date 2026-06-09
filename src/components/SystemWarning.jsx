import React from "react";
import { useState } from "react";
import "../css/Closing.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

import warningIcon from "../assets/images/warningIcon.svg";
import blockIcon from "../assets/images/blockIcon.svg";
import orangeIcon from "../assets/images/orangeIcon.svg";

import warningImg from "../assets/images/AsafStory.png";

import blockImg from "../assets/images/MayStory.png";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

function SystemWarning({ onFinish, onBack }) {
  const [part, setPart] = useState(0);
  const [page, setPage] = useState(0);

  const systemWarningData = [
    {
      tabTitle: "טעויות מערכת",
      cardTitle: "אזהרה",
      icon: warningIcon,
      pages: [
        {
          type: "info",
          showPracticeBtn: true,
          text: (
            <>
              דיווח אשר אינו תואם את המידע, יציג הודעה אשר מסבירה את הפער, אך
              המערכת אינה חוסמת את האפשרות לזין את הדיווח (בדרך כלל על מנת שלא
              לפגוע בפרט)
            </>
          ),
        },
        {
          type: "info",
          img: warningImg,
          text: (
            <>
              לדוגמה: לאסף זגה יש נפקדות פתוחה אך הוא הגיע היום לבסיס והזינו
              עליו ‘נוכח’.
            </>
          ),
        },
        {
          type: "question",
          question: "מה קצינת המשא”ן צריכה לעשות במקרה זה?",
          answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4"],
          correctAnswers: ["תשובה 3"],
        },
      ],
    },
    {
      tabTitle: "מערכת חוסמת",
      cardTitle: "חסימה",
      icon: blockIcon,
      pages: [
        {
          type: "info",
          showPracticeBtn: true,
          text: (
            <>
              דיווח נוכחות שאינו ניתן להזין כלל לחייל, לרוב עקב פער בסוג השירות.
              על כן, המערכת חוסמנת את הזנת הסטטוס ומציגה הודעה על סיבת החסימה,
              יש להזין סטטוס אחר בעבור החייל, אחרת - אין דיווח.
              <br />
              הודעה זו תופיע במערכת בצבע אדום.
            </>
          ),
        },
        {
          type: "info",
          img: blockImg,
          showPracticeBtn: false,
          text: (
            <>
              לדוגמה: מאי חטואל היא חיילת חובה שקיבלה ימי מחלה אבל הוזן עליה
              בטעות ‘מחלה עפ”י הצהרה’.
            </>
          ),
        },
        {
          type: "question",
          question: "מה קצין המשא”ן צריך לעשות במקרה זה?",
          answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4"],
          correctAnswers: ["תשובה 1"],
        },
      ],
    },
    {
      tabTitle: "צבע כתום",
      cardTitle: "צבע כתום",
      icon: orangeIcon,
      pages: [
        {
          type: "info",
          showPracticeBtn: true,
          text: (
            <>
              סימן שמש”ק משא”ן או כל משתמש סגל משא”ן ביחידה מטפל באותו הפרט, לכן
              יש לוודא שאף אחד לא מטפל בחייל (וכן, גם שהחלונית אינטרנט לא פתוחה
              אצלו)
            </>
          ),
        },
        {
          type: "question",
          question: "מה צריך לעשות במקרה הזה?",
          answers: ["תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4"],
          correctAnswers: ["תשובה 2"],
        },
      ],
    },
  ];

  const currentPart = systemWarningData[part];
  const currentPage = currentPart.pages[page];

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else if (part > 0) {
      setPart(part - 1);
      setPage(systemWarningData[part - 1].pages.length - 1);
    } else {
      onBack();
    }
  };

  const nextPage = () => {
    if (page < currentPart.pages.length - 1) {
      setPage(page + 1);
    } else if (part < systemWarningData.length - 1) {
      setPart(part + 1);
      setPage(0);
    } else {
      onFinish();
    }
  };

  const changePart = (partNum) => {
    setPart(partNum);
    setPage(0);
  };

  return (
    <div className="SystemWarning">
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
         (currentPage.type === "info" && !currentPage.showPracticeBtn) ? "" : "nextBtnDisable"
        }`}
        onClick={(currentPage.type === "info" && !currentPage.showPracticeBtn) ? nextPage : undefined}
      />

      <div className="systemWarning-tabs">
        <button
          className={`systemWarning-tab ${
            part === 0 ? "systemWarning-tab-active" : ""
          }`}
          onClick={() => changePart(0)}
        >
          טעויות מערכת
        </button>

        <button
          className={`systemWarning-tab ${
            part === 1 ? "systemWarning-tab-active" : ""
          }`}
          onClick={() => changePart(1)}
        >
          מערכת חוסמת
        </button>

        <button
          className={`systemWarning-tab ${
            part === 2 ? "systemWarning-tab-active" : ""
          }`}
          onClick={() => changePart(2)}
        >
          צבע כתום
        </button>
      </div>

      <p className="boldText title">הערות מערכת</p>

      {currentPage.type === "info" && (
        <div className="systemWarning-card">
          <img
            src={currentPart.icon}
            alt="systemWarningIcon"
            className="systemWarning-icon systemWarning-icon-right"
          />

          <img
            src={currentPart.icon}
            alt="systemWarningIcon"
            className="systemWarning-icon systemWarning-icon-left"
          />

          <p className="boldText systemWarning-card-title">
            {currentPart.cardTitle}
          </p>

          {currentPage.img && (
            <img
              src={currentPage.img}
              alt="systemWarningImg"
              className="systemWarning-img"
            />
          )}

          <p className="systemWarning-text">{currentPage.text}</p>

          {currentPage.showPracticeBtn && (
            <button
              className="textBtn systemWarning-practiceBtn"
              onClick={nextPage}
            >
              ועכשיו בואו נתרגל
            </button>
          )}
        </div>
      )}

      {currentPage.type === "question" && (
        <div className="systemWarning-question">
          <MultipleChoiceQuestion
            question={currentPage.question}
            answers={currentPage.answers}
            correctAnswers={currentPage.correctAnswers}
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

export default SystemWarning;
