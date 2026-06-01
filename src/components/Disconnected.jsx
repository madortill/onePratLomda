import React from "react";
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import vIcon from "../assets/images/v-icon.svg";

function Disconnected({ changePage }) {
  const previousPage = () => {
    changePage(0);
  };

  const nextPage = () => {
    changePage(2);
  };
  return (
    <div className="Disconnected">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />

      <h1 className="title">הזנת סטטוס מנותק קשר</h1>
      <div className="Disconnected-mainContent">
        <div className="Disconnected-textBox Disconnected-textBox-black">
          <div className="Disconnected-textBox-text">
            <p className="boldText">איסור על הזנת נעדר</p>
            <p>על כלל המשרתים, גם במידה והוחלט על ידי ר’ אכ”א כי המשרת נעדר</p>
          </div>
          <p className="Disconnected-redX">X</p>
        </div>
        <div className="Disconnected-textBox Disconnected-textBox-white">
          <div className="Disconnected-textBox-text">
            <p className="boldText">ראשי: מחוץ ליחידה <br/> משני: מנותק קשר </p>
            <p>יש לדווח סטטוס זה עבור משרתים שמבוצעות פעולות ליצירת קשר עימם</p>
          </div>
          <img src={vIcon} alt="vIcon" className="Disconnected-vIcon" />
        </div>
      </div>
    </div>
  );
}

export default Disconnected;
