import React, { useState } from "react";
import "../css/Closing.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

function ReviewPrat1({ changePage, changeSection }) {
  const [openedCircle, setOpenedCircle] = useState(null);
  const [visitedCircles, setVisitedCircles] = useState([]);
  const [allCirclesVisited, setAllCirclesVisited] = useState(false);

  const previousPage = () => {
    changeSection(3, true);
  };

  const nextPage = () => {
    changePage(1);
  };

  const handleCircleClick = (circleName) => {
    setOpenedCircle(circleName);
  
    setVisitedCircles((prev) => {
      if (prev.includes(circleName)) {
        return prev;
      }
  
      const updatedVisitedCircles = [...prev, circleName];
  
      if (updatedVisitedCircles.length === 3) {
        setAllCirclesVisited(true);
      }
  
      return updatedVisitedCircles;
    });
  };

  const closePopup = () => {
    setOpenedCircle(null);
  };

  const renderOpenedComponent = () => {
    switch (openedCircle) {
      case "noStatement":
        return (
          <div className="reviewPopup">
            <button className="closePopupBtn" onClick={closePopup}>
              ×
            </button>
            <h2>אי התאמה</h2>
            <p>כלל החיילים אשר הדיווחים עבורם אינם תואמים להמלצת המערכת.</p>
          </div>
        );

      case "notes":
        return (
          <div className="reviewPopup">
            <button className="closePopupBtn" onClick={closePopup}>
              ×
            </button>
            <h2>הערות</h2>
            <p>דיווחי אזהרה וחסימת הנתונים על ידי המערכת.</p>
          </div>
        );

      case "reportGaps":
        return (
          <div className="reviewPopup">
            <button className="closePopupBtn" onClick={closePopup}>
              ×
            </button>
            <h2>פערי דיווח</h2>
            <p>חיילים אשר לא דווח עליהם שום סטטוס.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="ReviewPrat1">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img src={nextBtn} alt="nextBtn" className={`nextBtn ${allCirclesVisited ? "" : "nextBtnDisable"}`}
  onClick={allCirclesVisited ? nextPage : undefined} />

      <h1 className="title">אופן בקרת הדו”ח</h1>
      <div className="ReviewPrat1-content">
        <p className="reviewSubtitle boldText">
          קיימות 3 דרכים לבצע בקרה על נכונות ואמינות הדו”ח:
        </p>

        <div className="circlesContainer">
          <button
            className={`reviewCircle circleNoStatement ${
              visitedCircles.includes("noStatement") ? "visitedNoStatement" : ""
            }`}
            onClick={() => handleCircleClick("noStatement")}
          >
            <span className="circleTitle">אי התאמה:</span>
            <span>
              כלל החיילים אשר הדיווחים עבורם אינם תואמים להמלצת המערכת
            </span>
          </button>
          <button
            className={`reviewCircle circleNotes ${
              visitedCircles.includes("notes") ? "visitedNotes" : ""
            }`}
            onClick={() => handleCircleClick("notes")}
          >
            <span className="circleTitle">הערות:</span>
            <span>דיווחי אזהרה וחסימת הנתונים ע״י המערכת</span>
          </button>

          <button
            className={`reviewCircle circleReportGaps ${
              visitedCircles.includes("reportGaps") ? "visitedReportGaps" : ""
            }`}
            onClick={() => handleCircleClick("reportGaps")}
          >
            <span className="circleTitle">פערי דיווח:</span>
            <span>חיילים אשר לא דווח עליהם שום סטטוס</span>
          </button>
        </div>

        <p className="reviewInstruction">
          - לחצו על כל אחד מאופני הבקרה כדי ללמוד עליו -
        </p>

        {openedCircle && (
          <div className="popupOverlay">{renderOpenedComponent()}</div>
        )}
      </div>
    </div>
  );
}

export default ReviewPrat1;
