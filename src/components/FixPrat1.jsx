import React from "react";
import { useState } from "react";
import "../css/Corrections.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import FlipCard from "./FlipCard";
import clock from "../assets/images/clock.svg";
import paper from "../assets/images/paper-black.svg";
import haravot from "../assets/images/haravot-blue.svg";

function FixPrat1({ changePage }) {
  const previousPage = () => {
    changePage(3);
  };
  const nextPage = () => {
    changePage(5);
  };

  const [flippedCards, setFlippedCards] = useState([]);
  const [allCardsFlipped, setAllCardsFlipped] = useState(false);

  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => {
      if (prev.includes(cardId)) {
        return prev;
      }

      const updatedFlippedCards = [...prev, cardId];

      if (updatedFlippedCards.length === 3) {
        setAllCardsFlipped(true);
      }

      return updatedFlippedCards;
    });
  };

  return (
    <div className="FixPrat1">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />
      <img src={nextBtn} alt="nextBtn"  className={`nextBtn ${allCardsFlipped ? "" : "nextBtnDisable"}`}  onClick={allCardsFlipped ? nextPage : undefined} />
      <p className="title">תיקון הדו”ח</p>
      <div className="FixPrat1-cards">
        <FlipCard
          id={1}
          variant="dark"
          onFlip={handleCardFlip}
          front={  <>
            <h3 className="flipCardTitle">תיקון עד 10 ימים</h3>
            <img className="flipCardIcon" src={clock} alt="שעון" /> 
          </>}
          back={
            <p className="flipCardText">
             נדרש לרשום את ההסבר לתיקון בשדה “הערת משתמש” במידה והתיקון התבצע  בטווח קצר.
            </p>
          }
        />
        <FlipCard
          id={2}
          variant="light"
          onFlip={handleCardFlip}
          front={<><h3 className="flipCardTitle">נדרש תחקיר חתום ע״י מפקדו</h3><img className="flipCardIcon" src={paper} alt="מסמך" /></>}
          back={
            <p className="flipCardText">
              במידה והתיקון התבצע בטווח ארוך מ-10 ימים. <br/> כל שינוי מעל 10 ימים שנוגע להיעדרויות משירות ללא רשות / חופשות אנש”ק. <br/> תיקונים הנוגעים בנפקדים ועריקים אם בוצע שינוי מעל 48 שעות.
            </p>
          }
        />
        <FlipCard
          id={3}
          variant="dark"
          onFlip={handleCardFlip}
          front={<> <h3 className="flipCardTitle">מצב חירום</h3><img className="flipCardIcon" src={haravot} alt="חרבות ברזל" /> </>}
          back={
            <p className="flipCardText">
              יחידה בעת תמרון תוכל לתקן דיווח ברטרו עד 30 יום ללא תחקיר, עם הזנה של הערת מערכת בלבד.
              זאת מלבד לתיקון דיווחי חופשות משרתי קבע ונפקדים שנדרשים לתחקיר
            </p>
          }
        />
      </div>
      <p className="note-FixPrat1">- עברו עם העכבר על הכרטיסיות -</p>
    </div>
  );
}

export default FixPrat1;
