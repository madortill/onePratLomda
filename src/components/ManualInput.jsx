import React, { useState } from "react";
import "../css/DifferentInput.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ktzina from "../assets/images/ktzina.png";

function ManualInput({ changePage, changeSection }) {
  const [canContinue, setCanContinue] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const previousPage = () => {
    changePage(0, true);
  };

  const nextPage = () => {
    changeSection(4);
  };
  const circles = [
    {
      title: "תרגיל / אימון",
      text: "חובה להתחדש אישור כתוב ע״י מפקד היחידה / תקופת האימון",
      color: "black",
      size: "large",
      top: "1.2rem",
      right: "21.75rem",
    },
    {
      title: "יחידת משנה ממוקדת במתח ללא אמצעי תקשורת בכלל",
      text: "נדרש אישור מפקד היחידה וקשמ״ח",
      color: "white",
      size: "xlarge",
      top: "0rem",
      right: "3.6rem",
    },
    {
      title: "טיול יחידתי",
      text: "",
      color: "blue",
      size: "small",
      top: "12rem",
      right: "29.6rem",
    },
    {
      title: "ערב חג",
      text: "",
      color: "black",
      size: "small",
      top: "19.4rem",
      right: "23.6rem",
    },
    {
      title: "חופשה יחידתית",
      text: "רגילה / הדממה / סוף שבוע ארוך",
      color: "white",
      size: "large",
      top: "11rem",
      right: "13.6rem",
    },
    {
      title: "העברת קו",
      text: "גדודים ויחידות לוחמות",
      color: "blue",
      size: "large",
      top: "14.9rem",
      right: "2rem",
    },
  ];

  return (
    <div className="ManualInput">
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
      <h1 className="title">נוהל עבודה ידני</h1>
      <div className="ManualInput-content">
        <div className="kzina-btn-container">
          <div className="ktzina-bubble ktzina-bubble-ManualInput">
            <div className="bubble bubble-ManualInput">
              <p className="boldText">באילו מקרים נבצע נוהל עבודה ידני?</p>
            </div>
            <img src={ktzina} alt="ktzina" className="ktzina-ManualInput" />
          </div>
          <button
            className={`textBtn textBtn-ManualInput ${
              canContinue ? "textBtnDisabled" : ""
            }`}
            onClick={() => {
              setIsPopOpen((prev) => !prev);
              setCanContinue(true);
            }}
          >
            איך זה מתבצע?
          </button>
        </div>
        <div className="manual-input-circles-wrapper">
          {circles.map((circle, index) => (
            <button
              key={circle.title}
              className={`
              manual-input-circle
              manual-input-circle--${circle.color}
              manual-input-circle--${circle.size}
            `}
              style={{
                "--circle-top": circle.top,
                "--circle-right": circle.right,
                "--circle-delay": `${index * 0.12}s`,
              }}
            >
              <span className="manual-input-circle__title">{circle.title}</span>

              {circle.text && (
                <span className="manual-input-circle__text">{circle.text}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      {isPopOpen && (
        <>
          <div className="blur-background"></div>

          <div className="ManualInput-popup">
            <button
              type="button"
              className="ManualInput-close-btn"
              onClick={() => {
                setIsPopOpen((prev) => !prev);
              }}
            >
              ×
            </button>
            <h2 className="ManualInput-popup-title">
            איך מתבצע נוהל עבודה ידני?
            </h2>

            <div className="ManualInput-popup-text">
            בעזרת דיווח טלפוני / דיגיטלי - הזנה תבוצע ע”י סגלי המשא”ן + קבלת אסמכתא ע”י המסגרת. <br/> הזנה יכולה להתבצע גם דרך אפליקצית דוח 1, אישור הדיווחים יתבצע על ידי קצין המשא”ן כשיגיעו למשרד ברטרו בתוך 48 שעות מיום החזרה.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ManualInput;
