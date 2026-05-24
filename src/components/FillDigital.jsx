import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import phone from "../assets/images/prat1Phone.svg";

function FillDigital({ changePage, changeSection }) {
  const [canContinue, setCanContinue] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const previousPage = () => {
    changeSection(1, true);
  };
  const nextPage = () => {
    changePage(1);
  };
  return (
    <div className="FillDigital">
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
      <div className="FillDigital-Content">
        <p className="FillDigital-title">הזנת הדו”ח בדיגיטל</p>
        <div className="FillDigital-text">
          <div>
            הזנת דו”ח 1 עצמית ואישור מפקד לדיווח הפרט מתבצעות דרך אפליקציית דו”ח
            1.
          </div>
          <div>הדיווח נקבע בהתייחס לאיפה שכל המסגרות של אותו חייל נמצאות.</div>
          <div>
            <p className="boldText">שעות הזנת הדו”ח בימי חול:</p>
            <p>
              דיווח פרט: 5:00-10:15 <br /> אישור מפקד: עד 10:30{" "}
            </p>
          </div>
        </div>
        <img src={phone} alt="phone" className="FillDigital-img" />
        <button
          className="FillDigital-info-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setCanContinue(true);
          }}
        >
          i
        </button>
      </div>
      {isOpen && <div className="blur-background"></div>}
     {isOpen && <div className="FillDigital-info-pop">
      <button className="close-btn" onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
            X
          </button>
          <p>האפליקציה מהווה כלי סיוע בידי משרד המשא”ן והמפקדים לניהול כ”א. <br/> אין לפגוע בפרט או בכשירות היחידה לשם הזנת דיווח פרט.</p>
      </div>}
    </div>
  );
}

export default FillDigital;
