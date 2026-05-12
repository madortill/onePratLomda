import React from 'react'
import { useState } from "react";
import "../css/Principles.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import calender from "../assets/images/calender.svg";
import clock from "../assets/images/clock.svg";
import check from "../assets/images/check.svg";
import paper from "../assets/images/paper.svg";
import haravot from "../assets/images/haravot.svg";

function PrinciplesPrat1({ changePage, changeSection }) {
    const cards = [
      { color:  "#F6E467", text: "הדו”ח ייסגר בימים א’-ה’, למעט ימי חג ע”ח המערכת וערב יום כיפור", img: calender },
      { color: "#000000", text: "הדו”ח ייסגר במערכת עד השעה 13:00. ביום א’ בלבד ייסגר במערכת עד השעה 15:00 (בבסיסים סגורים למעט חריגים)", img: clock },
      { color:  "#DAE6F3", text: "הדו”ח יאושר וייסגר על ידי קצין או נגד המשא”ן (במידה ויש)", img: check },
      { color: "#000000", text: "קציני מילואים ימלאו במסך “מעקב נוכחות” עבור החיילים הנמצאים בשירות מילואים פעיל. \n חייל במת”ק ושנ”ב:  יופיע בדו”ח של קצין המשא”ן הסדיר. \n חייל בשמ”פ: יופיע לקצין משא”ן המילואים בלבד.", img: paper },
      { color: "#F6E467", text: "החל מהתאריך 26/10/2024 חלה חובה על הזנת דו”ח 1 גם בסופי השבוע. \n בסופי שבוע מועדי ישראל - בעת תמרון, מאושר ליחידות קצה לסגור את הדו”ח עד השעה 18:00", img: haravot },
    ];
    const [openCards, setOpenCards] = useState([]);
    const allOpened = openCards.length === cards.length;
    const previousPage = () => {
        changePage(0);
      };
      const nextPage = () => {
        changeSection(2);
      };

  return (
    <div className='PrinciplesPrat1'>
       <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn" className={`nextBtn ${allOpened ? "" : "nextBtnDisable"}`}  onClick={allOpened ? nextPage : undefined} />
      <div className="PrinciplesPrat1-content">
        <h2 className="PrinciplesPrat1-title">עקרונות הדו”ח</h2>

        <div className="cardsPrinciplesPrat1-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`cardPrinciplesPrat1 ${openCards.includes(index) ? "active" : ""} ${(index === 1 || index === 3) ? "lightText" : ""}`}
              style={{ backgroundColor: card.color }}
              onClick={() =>
                setOpenCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                )
              }
            >
              <div className="cardPrinciplesPrat1-content">
                <img src={card.img} alt="card" className="cardPrinciplesPrat1-img" />

                <div className="cardPrinciplesPrat1-text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
          <p className="PrinciplesPrat1-note">לחץ על הכרטיסיות</p>
      </div>
    </div>
  )
}

export default PrinciplesPrat1
