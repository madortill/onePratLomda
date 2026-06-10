import React, { useState } from "react";
import "../css/DifferentInput.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import hospital from "../assets/images/hospital-icon.svg";
import moved from "../assets/images/moved-icon.svg";
import outside from "../assets/images/outside-unit-icon.svg";

function SpecialInput({ changePage, changeSection, startPage, isReviewMode }) {
  const previousPage = () => {
    changeSection(2, true);
  };

  const nextPage = () => {
    changePage(1);
  };

  const items = [
    {
      title: "מאושפזים",
      img: hospital,
      text: (
        <>
          <p>
            חייל ירשם כמאושפז במידה ומסופח לר”מ 2, בימי מחלה ממושכים ידווח
            “חופשת מחלה”.
          </p>
        </>
      ),
    },
    {
      title: "מחוץ ליחידה",
      img: outside,
      text: (
        <>
          <p>
            כאשר חייל לא נמצא ביחידת האם שלו אך לא הוגדר כיום חופש לדוגמה: מחוץ
            ליחידה בתפקיד, הפנייה רפואית וכדו’. יש לבצע מעקב אחר סטטוס זה עם
            הערות משתמש בדו”ח - כל חריגה מפקודה זו מול רמ”ד הו”ב.
          </p>
          <p className="boldText boldText-SpecialInput">
            לא ניתן לדווח מעל 7 ימים ברצף.
          </p>
          <p className="SpecialInput-popup-small-text">
            (במידה ויש צורך להזין סטטוס תפקיד מחוץ ליחידה מעל 7 ימים, יש לפנות
            לרמ”ד ההו”ב הפיקודי.)
          </p>
        </>
      ),
    },
    {
      title: "נגרעים",
      img: moved,
      text: (
        <>
          <p>
            חייל אשר נגרע מהיחידה אך טרם נקלט ביחידתו החדשה, יופיע בדו”ח 1
            כ-”נגרע ממתין לקליטה” ועדיין ירשם במצבה הפעילה והרישומית של יחידתו.{" "}
          </p>
          <p className="boldText boldText-SpecialInput">
            סטטוס זה לא ידווח מעל ליום אחד בלבד!{" "}
          </p>
        </>
      ),
    },
  ];

  const [activeItem, setActiveItem] = useState(null);
  const [visitedItems, setVisitedItems] = useState([]);

  const canContinue =
  isReviewMode || startPage !== 0 || visitedItems.length === items.length;

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleClosePopup = () => {
    if (activeItem !== null) {
      setVisitedItems((prev) =>
        prev.includes(activeItem) ? prev : [...prev, activeItem]
      );
    }

    setActiveItem(null);
  };

  return (
    <div className="SpecialInput">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img
        src={nextBtn}
        alt="nextBtn"
        className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}
        onClick={canContinue ? nextPage : undefined}
      />

      <h1 className="title">הזנות מיוחדות</h1>
      <p className="SpecialInput-note"> - לחצו על הנושאים כדי ללמוד עליהם -</p>
      <div
        className={`SpecialInput-items ${activeItem !== null ? "dimmed" : ""}`}
      >
        {items.map((item, index) => {
          const isVisited = visitedItems.includes(index);

          return (
            <button
              key={index}
              type="button"
              className={`SpecialInput-item ${isVisited ? "visited" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="SpecialInput-img-circle">
                <img
                  src={item.img}
                  alt={item.title}
                  className="SpecialInput-item-img"
                />
              </div>

              <p className="SpecialInput-item-title">{item.title}</p>
            </button>
          );
        })}
      </div>

      {activeItem !== null && (
        <>
          <div className="blur-background"></div>

          <div className="SpecialInput-popup">
            <button
              type="button"
              className="SpecialInput-close-btn"
              onClick={handleClosePopup}
            >
              ×
            </button>

            <img
              src={items[activeItem].img}
              alt=""
              className="SpecialInput-popup-img"
            />

            <h2 className="SpecialInput-popup-title">
              {items[activeItem].title}
            </h2>

            <div className="SpecialInput-popup-text">
              {items[activeItem].text}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SpecialInput;
