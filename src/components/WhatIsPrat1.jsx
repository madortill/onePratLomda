import React from 'react'
import { useState } from "react";
import "../css/Principles.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import whyprat1 from "../assets/images/whyprat1.svg";
import whyprat2 from "../assets/images/whyprat2.svg";
import whyprat3 from "../assets/images/whyprat3.svg";

function WhatIsPrat1({ changePage, changeSection }) {
    const [canContinue, setCanContinue] = useState(false);
    const previousPage = () => {
        changeSection(0, true);
      };
      const nextPage = () => {
        changePage(1);
      };
  return (
    <div className='WhatIsPrat1'>
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}  onClick={canContinue ? nextPage : undefined} />
      <div className='text-WhatIsPrat1'>
        <p className='boldText title-WhatIsPrat1'>מהו דו"ח 1?</p>
        <p>דו”ח 1 כשמו כן הוא, הראשון בחשיבותו עבור משרד משא”ן סדיר. <br/>
        הדו”ח מפרט את סטטוס הנכוחות של כל משרתי היחידה בחתך ליחידות משנה, מוזן באמצעות אפליקציית הדו”ח 1 ומערכת אנשים?</p>
      </div>
      <button className={`textBtn textBtn-WhatIsPrat1 ${canContinue ? "textBtnDisabled" : ""}`} onClick={() => setCanContinue(true)}>למה חשוב ללמוד על דו”ח 1?</button>
      {canContinue && <div className='whyPrat'>
        <img className='whyprat-img' src={whyprat1} alt="whyprat1" />
        <img className='whyprat-img whyprat-img2' src={whyprat2} alt="whyprat2" />
        <img className='whyprat-img' src={whyprat3} alt="whyprat3" />
      </div>}
    </div>
  )
}

export default WhatIsPrat1
