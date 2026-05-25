import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import phoneSolider from "../assets/images/prat1Phone.svg";
import solider from "../assets/images/soliderFillPrat1.png";
import phoneCommander from "../assets/images/phoneCommander.svg";
import commander from "../assets/images/commanderFillPrat1.png";
import ktzina from "../assets/images/ktzinaFillPrat1.svg";
import KtzinaForm from "../assets/images/prat1KtzinaForm.svg";
import JourneyCircles from "./JourneyCircles";
import PopupJourney from "./PopupJourney";

function Prat1Journey({ changePage, startPage }) {
  const [page, setPage] = useState(startPage);
  const [canContinue, setCanContinue] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const previousPage = () => {
      if (page === 0) {
        changePage(0);
    } else {
        setPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (page === 2) {    
        changePage(2);
    } else {
        setPage((prev) => prev + 1);
    }
  };

  const pagesData  = [
    {
        id: 0,
        text: "כל חייל מדווח עצמית באפליקציית דו”ח 1",
        img: solider,
        prat1: phoneSolider
    },
    {
        id: 1,
        text: "המפקד מאשר את דיווח הפרט בלשונית הייחודית באפליקציית דו”ח 1",
        img: commander,
        prat1: phoneCommander
    },
    {
        id: 0,
        text: "קצינת המשא”ן מאשרת את הדו”ח היחידתי",
        img: ktzina,
        prat1: KtzinaForm
    }
  ]
  return (
    <div className="Prat1Journey">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${(canContinue || page > 0) ? "" : "nextBtnDisable"}`}  onClick={(canContinue || page > 0) ? nextPage : undefined}
      />
      <p className="Prat1Journey-title">המסע של דו"ח 1</p>
      <p className="Prat1Journey-text">{pagesData[page].text}</p>
      <div className={`Prat1Journey-img-container Prat1Journey-img-container${page}`}>
        <img className="Prat1Journey-img" src={pagesData[page].img} alt="img" />
        <img className="Prat1Journey-img" src={pagesData[page].prat1} alt="prat1" />
      </div>
       {page === 0 && <button className={`textBtn textBtn-Prat1Journey ${canContinue ? "textBtnDisabled" : ""}`} onClick={() => {setCanContinue(true); setIsPopOpen((prev) => !prev);}}>באילו מצבים אין חובת דיווח?</button>}
      <JourneyCircles currentPage={page}/>
     {isPopOpen && <PopupJourney onClose={() => setIsPopOpen((prev) => !prev)}/>}
    </div>
  );
}

export default Prat1Journey;
