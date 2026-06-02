import React from "react";
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import bellIcon from "../assets/images/bell-icon.svg";
import bellIconBlack from "../assets/images/bell-icon-black.svg";

function Nahsal({ changePage }) {
  const previousPage = () => {
    changePage(3, true);
  };

  const nextPage = () => {
    changePage(5);
  };
  return (
    <div className="Nahsal">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <p className="title">דיווחי נכס”ל</p>
      <div className="Nahsal-content">
      <p>
        עקב המלחמה - ברמתו של ק. המשא”ן הפעלת נכס”ל באפליקציית דו”ח 1 בתיאום
        ואישור אל מול מפקד היחידה. <br /> אפשרות הנכס”ל תהיה פתוחה 24/7.{" "}
      </p>
      <p className="boldText Nahsal-option-title">אופציות הדיווחים:</p>
      <div className="Nahsal-grid">
        <div className="Nahsal-option">
            <img src={bellIcon} alt="bellIcon" className="bellIcon" />
            <p>בדרך אל היחידה</p>
        </div>
        <div className="Nahsal-option Nahsal-option-white">
            <img src={bellIconBlack} alt="bellIcon" className="bellIcon" />
            <p>בתפקיד מחוץ ליחידה או במרחב צבאי אחר</p>
        </div>
        <div className="Nahsal-option Nahsal-option-blue">
            <img src={bellIconBlack} alt="bellIcon" className="bellIcon" />
            <p>בדרך מהיחידה</p>
        </div>
        <div className="Nahsal-option Nahsal-option-white">
            <img src={bellIconBlack} alt="bellIcon" className="bellIcon" />
            <p>בבית או במרחב אזרחי אחר</p>
        </div>
        <div className="Nahsal-option">
            <img src={bellIcon} alt="bellIcon" className="bellIcon" />
            <p>ביחידה</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Nahsal;
