import React, { useState } from "react";
import "../css/Summary.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ktzina from "../assets/images/ktzina-left.png";
import ktzinaLeft from "../assets/images/ktzina-pocket.png";

const tipsPages = [
  {
    white:
      "מעבר יומי על סטטוס הזנות פרט ומפקד באפליקצייה טרם שעת הסגירה על מנת להציף פערים למסגרות",
    black:
      "גם אם ישנו מש״ק אחראי / פק״ל - לעבור על הדו״ח בכל יום / סוף שבוע בעצמכם",
    blue: (
      <>
        לגזור משמעויות מהדו״ח ולנהל טבלת בו״ם צמודה
        <br />
        (מאושפזים, נפקדים, עריקים)
      </>
    ),
  },
  {
    white:
      "לדרוש מכתב הסבר עפ״י הפקודות - אך לתעד בזמן שקיבלתם את הדיווח השונה גם אם לוקח למפקד כמה ימים עד לשליחת המכתב הסבר",
    black:
      "מומלץ להכין פורמט תחקירי מוכן לדו״ח 1 ולתרחישי סטנדרט קבוע שאליו ניתן לצרף גם את האסמכתאות",
    blue: (
      <>
        קבוצת וואטסאפ עם כלל נאמני המשא״ן ביחידה - בה שולחים פערי וסיכום דו״ח 1 מידי יום
      </>
    ),
  },
];

function Tips({ changePage }) {
  const [page, setPage] = useState(0);

  const currentTips = tipsPages[page];

  const previousPage = () => {
    if (page === 0) {
      changePage(0, true);
    } else {
      setPage(0);
    }
  };

  const nextPage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      changePage(2);
    }
  };

  return (
    <div className="Tips">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img
        src={nextBtn}
        alt="nextBtn"
        className="nextBtn"
        onClick={nextPage}
      />

      <p className="title">טיפ מפק״צ</p>

      <div className={`tips__grid ${page === 1 ? "tips__grid--page-two" : ""}`}>
        <div className="tips__bubble tips__bubble--white">
          {currentTips.white}
        </div>

        <div className="tips__bubble tips__bubble--black">
          {currentTips.black}
        </div>

        <img
          src={(page === 1) ? ktzinaLeft : ktzina}
          alt="קצינה"
          className="tips__character"
        />

        <div className="tips__bubble tips__bubble--blue">
          {currentTips.blue}
        </div>
      </div>
    </div>
  );
}

export default Tips;