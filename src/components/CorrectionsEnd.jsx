import React from 'react'
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ktzina from "../assets/images/angry-ktzina.png";

function CorrectionsEnd({ changePage, changeSection }) {
    const previousPage = () => {
        changePage(5, true);
      };
      const nextPage = () => {
        changeSection(3);
      };
  return (
    <div className='CorrectionsEnd'>
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <div className="ktzina-bubble ktzina-bubble-CorrectionsEnd">
        <div className="bubble bubble-CorrectionsEnd boldText">
          <p> במצב אידאלי אין צורך לתקן דוח 1!</p>
          <p>
          תיקון דו”ח 1 מעיד על <span className='redText'> חוסר שליטה בכ”א </span>וזו מהות התפקיד
          </p>
        </div>
        <img src={ktzina} alt="ktzina" className="ktzina-CorrectionsEnd" />
      </div>
    </div>
  )
}

export default CorrectionsEnd
