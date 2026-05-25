import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ktzina from "../assets/images/ktzina.png";

function Prat1Changes({ changePage }) {
  const previousPage = () => {
    changePage(2);
  };
  const nextPage = () => {
    changePage(4);
  };
  return (
    <div className="Prat1Changes">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <p className="title">שינויים בדו”ח</p>
      <p className="Prat1Changes-text">
        שינויים בסטטוס מרגע הגשת הדו”ח יועברו באופן טלפוני לקצין המשא”ן היחידתי.
      </p>
      <div className="Prat1Changes-mainContent">
        <div className="ktzina-bubble ktzina-bubble-Prat1Changes">
          <div className="bubble bubble-Prat1Changes">
            <p className="boldText">מתי לתקן?</p>
            <p>הנחת היסוד היא שבמידה והדיווח שקרי יש לשנות תמיד!</p>
          </div>
          <img src={ktzina} alt="ktzina" className="ktzina-Prat1Changes" />
        </div>
        <div className="changes-text-container">
          <p className="changes-text-title">שינויים המצריכים תיקון דו”ח 1:</p>
          <div className="changes-grid">
            <p className="changes-item">חופשות מחלה אנש”ק</p>
            <p className="changes-item">היעדרות משירות</p>
            <p className="changes-item">חופשות חובה וקבע</p>
            <p className="changes-item">שינוי המונע פגיעה בפרט</p>
          </div>
        </div>
      </div>
      <p className='Prat1Changes-note'>בתיקונים בנושא חופשות משרתי קבע או נפקדות נדרש מכתב הסבר שיאושר על ידי מפקד היחידה בדרגת סא”ל ומעלה</p>
    </div>
  );
}

export default Prat1Changes;
