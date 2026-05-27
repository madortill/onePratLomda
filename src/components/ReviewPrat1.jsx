import React from 'react'
import { useState } from "react";
import "../css/ClosePrat1.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";

function ReviewPrat1({changePage, changeSection}) {
    const previousPage = () => {
        changeSection(3, true);
      };
    
      const nextPage = () => {
        changePage(1);
      };
  return (
    <div className='ReviewPrat1'>
        <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn`}
        onClick={nextPage}
      />
      <h1 className="title">אופן בקרת הדו”ח</h1>
    </div>
  )
}

export default ReviewPrat1
