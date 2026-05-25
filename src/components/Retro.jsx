import React from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import retroImg from "../assets/images/retroImg.svg";

function Retro({ changePage }) {
  const previousPage = () => {
    changePage(1, true);
  };
  const nextPage = () => {
    changePage(3);
  };
  return (
    <div className="Retro">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <div className="Retro-content">
        <img src={retroImg} alt="retroImg" className="retroImg" />
        <p className="retro-title">הזנות ברטרו</p>
        <p> הזנת נוכחות ברטרו תתאפשר בימים אשר הוגדרו מראש כחופשה יחידתית.</p>
        <p>
          כל מסגרת תבצע הזנה מרוכזת לתאריכים הרלוונטים על כלל החיילים במסגרת.
        </p>
        <p>
          יש להשלים את הדיווח עד <span className="boldText">48 שעות</span> ממועד
          החזרה מחופשת היחידה
        </p>
      </div>
    </div>
  );
}

export default Retro;
