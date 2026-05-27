import React from "react";
import { useState } from "react";
import "../css/ClosePrat1.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import closeImg from "../assets/images/closePrat1Img.svg";
import SummaryImg from "../assets/images/closeSummaryImg.svg";
import ktzina from "../assets/images/ktzina.png";

function ClosePrat1End({ changePage, changeSection, startPage }) {
  const [page, setPage] = useState(0);
  const [finishedPractice, setFinishedPractice] = useState(false);
  const previousPage = () => {
    if (page === 0) {
      changePage(0, true);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page === 0) {
      setPage((prev) => prev + 1);
    } else {
      changeSection(5);
    }
  };
  const canContinue = page === 1 || finishedPractice;
  return (
    <div className="ClosePrat1End">
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
      <h1 className="title">סגירת הדו”ח</h1>
      <div className="ClosePrat1End-content">
        <div className="ktzina-bubble ktzina-bubble-ClosePrat1End">
          <div className={`bubble bubble-ClosePrat1End${page}`}>
            <p className={page === 0 ? "boldText" : ""}>
              {page === 0 ? (
                "כל הכבוד! פתרתם את כל הפערים בדו״ח - עכשיו לחצו אשר"
              ) : page === 1 ? (
                <>
                  לאחר אישור הדו”ח יפתח חלון חדש - דו”ח 1 סיכומי עבור תאריך
                  מילוי הדוח.
                  <br />
                  ניתן לראות בו סיכום של הדו”ח לפי הקריטריונים - סטטוס ראשי,
                  סטטוס משני.{" "}
                </>
              ) : null}
            </p>
          </div>
          <img src={ktzina} alt="ktzina" className="ktzina-ClosePrat1End" />
        </div>
        {page === 0 && (
          <div className="closePrat1Img-container">
            <img src={closeImg} alt="closePrat1Img" className="closePrat1Img" />
            <button className="closePrat1Btn" onClick={nextPage}>
              אשר
            </button>
          </div>
        )}
       {page === 1 && <img src={SummaryImg} alt="closeSummaryImg" className="closeSummaryImg" />}
      </div>
    </div>
  );
}

export default ClosePrat1End;
