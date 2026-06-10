import React, { useState } from "react";
import "../css/Closing.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

// קומפוננטות שייפתחו בלחיצה על העיגולים
import SystemWarning from "./SystemWarning";
// import NoMatch from "./NoMatch";
import ReportGaps from "./ReportGaps";
import NoMatch from "./NoMatch";

function ReviewPrat1({ changePage, changeSection, startPage, isReviewMode }) {
  const [openedCircle, setOpenedCircle] = useState(null);
  const [visitedCircles, setVisitedCircles] = useState([]);

  const allCirclesVisited =
  isReviewMode || startPage !== 0 || visitedCircles.length === 3;

  const previousPage = () => {
    changeSection(3, true);
  };

  const nextPage = () => {
    changePage(1);
  };

  const markCircleAsVisited = (circleName) => {
    setVisitedCircles((prev) => {
      if (prev.includes(circleName)) return prev;
      return [...prev, circleName];
    });
  };

  const handleCircleClick = (circleName) => {
    setOpenedCircle(circleName);
  };

  const finishOpenedComponent = () => {
    if (openedCircle) {
      markCircleAsVisited(openedCircle);
    }
  
    setOpenedCircle(null);
  };
  
  const backFromOpenedComponent = () => {
    setOpenedCircle(null);
  };

  const renderOpenedComponent = () => {
    switch (openedCircle) {
      case "NoMatch":
        return (
          <NoMatch
            onFinish={finishOpenedComponent}
            onBack={backFromOpenedComponent}
          />
        );
  
      case "notes":
        return (
          <SystemWarning
            onFinish={finishOpenedComponent}
            onBack={backFromOpenedComponent}
          />
        );
  
      case "reportGaps":
        return (
          <ReportGaps
            onFinish={finishOpenedComponent}
            onBack={backFromOpenedComponent}
          />
        );
  
      default:
        return null;
    }
  };

  if (openedCircle) {
    return renderOpenedComponent();
  }

  return (
    <div className="ReviewPrat1">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${allCirclesVisited ? "" : "nextBtnDisable"}`}
        onClick={allCirclesVisited ? nextPage : undefined}
      />

      <h1 className="title">אופן בקרת הדו”ח</h1>

      <div className="ReviewPrat1-content">
        <p className="reviewSubtitle">
          קיימות 3 דרכים לבצע בקרה על נכונות ואמינות הדו”ח:
        </p>

        <div className="circlesContainer">
          <button
            className={`reviewCircle circleNoMatch ${
              visitedCircles.includes("NoMatch") ? "visitedNoMatch" : ""
            }`}
            onClick={() => handleCircleClick("NoMatch")}
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
      </div>
    </div>
  );
}

export default ReviewPrat1;