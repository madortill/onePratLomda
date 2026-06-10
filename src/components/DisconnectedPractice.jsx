import React, { useState } from "react";
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import story from "../assets/images/almogStory.png";
import notes from "../assets/images/AlmogNotes.svg";
import ktzina from "../assets/images/ktzina.png";

import TypewriterText from "./TypewriterText";
import AlmogSvg from "./AlmogSvg";

function DisconnectedPractice({ changePage, startPage, isReviewMode }) {
  const [page, setPage] = useState(startPage);
  const [finishStory, setFinishStory] = useState(true);
  const [finishedPractice, setFinishedPractice] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);

  const textLines = [
    "במהלך פעילות מבצעית לפני כשלושה ימים,",
    "אבד הקשר האחרון עם הלוחם אלמוג אוחיון.",
    "לאחר שחלפו 24 שעות ללא קשר עם אלמוג,",
    "היחידה ביצעה תחקיר שטח מעמיק שכלל",
    "סריקות ואימות נתונים מול היחידות השכנות.",
    "משלא נמצא קצה חוט, הועבר דיווח דחוף",
    "לענף איתור נעדרים, שם בוצעה הצלבת",
    "נתונים מול בתי חולים ומרכזי שליטה ארציים.",
    "בתום הבדיקות המקיפות ואישור הגורמים",
    "המוסמכים, הוחלט להגדירו רשמית כנעדר",
    'במערכות המטכ"ליות.',
  ];

  const canGoNext =
    isReviewMode ||
    startPage > 0 ||
    (page === 0 && finishStory) ||
    (page === 1 && finishedPractice) ||
    page > 1;

  const previousPage = () => {
    if (page === 0) {
      changePage(1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page === 1) {
      changePage(3);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="DisconnectedPractice">
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

      <p className="title">הזנת סטטוס מנותק קשר</p>

      {page > 0 && (
        <p className="FixPractice-note">
          - שנו את פרטי החייל במערכת לפי הנתונים -
        </p>
      )}

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
        <div className="Itay-notes">
          <button
            className="textBtn textBtn-FixPractice"
            onClick={() => setIsPopOpen((prev) => !prev)}
          >
            {isPopOpen ? "סגירת התזכורת" : "תזכורת לפרטים"}
          </button>

          {isPopOpen && (
            <img src={notes} alt="notes" className="Itay-notes-img" />
          )}
        </div>
      )}

      {page === 1 && (
        <AlmogSvg
          className="AlmogSvg"
          setFinishedPractice={setFinishedPractice}
        />
      )}

      {finishedPractice && page === 1 && (
        <div className="ktzina-bubble ktzina-bubble-FixPractice">
          <div className="bubble bubble-FixPractice">
            <p className="boldText">כל הכבוד!</p>
            <p>יש לדווח סטטוס זה עבור משרתים שמבוצעות פעולות ליצירת קשר עימם</p>
          </div>

          <img src={ktzina} alt="ktzina" className="ktzina-FixPractice" />
        </div>
      )}
    </div>
  );
}

export default DisconnectedPractice;
