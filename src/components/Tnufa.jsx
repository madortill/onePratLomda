import React from 'react'
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import tnufaImg from "../assets/images/tnufa-img.png";

function Tnufa({ changePage, changeSection }) {
    const previousPage = () => {
        changePage(4);
      };
    
      const nextPage = () => {
        changeSection(6);
      };
  return (
    <div className='Tnufa'>
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />
      <p className="title">שליטה בכ”א בסופ”ש - מערכת ‘תנופה’</p>
      <img src={tnufaImg} alt="tnufaImg" className='tnufaImg' />
    </div>
  )
}

export default Tnufa
