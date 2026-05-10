import React from "react";
import { useState } from "react";
import "../css/Start.css";

import ktzina from "../assets/images/ktzina.png";
import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

function Intro({ changePage, changeSection }) {
  const previousPage = () => {
    changePage(0);
  };
  const nextPage = () => {
    changeSection(1);
  };
  return (
    <div className="Intro">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <div className="ktzina-bubble ktzina-bubble-intro">
      <div className="bubble bubble-intro">
        <p className="title">ברוכים הבאים ללומדת דו"ח 1!</p>
        <p>
          במהלך הלומדה תכירו את עקרונות <br /> השימוש בדו"ח 1 ופקודותיו
        </p>
      </div>
      <img src={ktzina} alt="ktzina" className="ktzina-intro" />
      </div>
    </div>
  );
}

export default Intro;
