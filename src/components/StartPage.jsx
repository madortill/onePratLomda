import React from 'react'
import { useState } from "react";
import "../css/Start.css";
import About from './About';

import prat1Logo from "../assets/images/pratOneLogo.svg";
import openingGraphic from "../assets/images/openingGraphic.svg";

function StartPage({changePage}) {
    const [canContinue, setCanContinue] = useState(false);
    const checkHebrewName = (value) => {

        const hebrewRegex = /^[\u0590-\u05FF]+(?:\s+[\u0590-\u05FF]+)+$/;
    
        if (hebrewRegex.test(value.trim())) {
            setCanContinue(true);
        }
        else {
            setCanContinue(false);
        }
    };
    const nextPage = () => {
        changePage(1);
      };
  return (
    <div className='StartPage'>
      <About/>
      <div className='StartPage-Content'>
        <img src={prat1Logo} alt="prat1Logo" className='prat1Logo-startPage' />
        <p className='title startTitle'>לומדת דו"ח 1</p>
        <div className='loginBox'>
            <input type="text" placeholder='שם מלא' className='nameInput' onChange={(e) => checkHebrewName(e.target.value)} />
        </div>
        <button className={`StartBtn ${canContinue ? "" : "StartBtnDisabled"}`} disabled={!canContinue} onClick={nextPage}>בואו נתחיל!</button>
        <img src={openingGraphic} alt="openingGraphic" className='openingGraphic'/>
      </div>
    </div>
  )
}

export default StartPage
