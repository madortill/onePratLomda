import React, { useState } from "react";
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import ControlImg from "../assets/images/ControlImg.png";
import weekendGirl from "../assets/images/weekend-girl.png";
import weekendGuy from "../assets/images/weekend-guy.png";
import weekendKtzina from "../assets/images/weekend-ktzina.png";

function ControlHR({ changePage, startPage }) {
  const [page, setPage] = useState(startPage);
  const previousPage = () => {
    if (page === 0) {
      changePage(2, true);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (page === 1) {
      changePage(4);
    } else {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className="ControlHR">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />

      <p className="title">
        {page === 0 ? "שליטה בכ”א במהלך השבוע" : "שליטה בכ”א בסופ”ש"}
      </p>
      {page === 0 && (
        <div className="ControlHR-page1">
          <p>
            עבור יחידות הלוקחות חלק פעיל בתמרון - יש להיערך להשארת נציגות ממשרד
            המשא”ן בעורף לטובת הזנות דו”ח 1 במערכת ‘אנשים’.
          </p>
          <p>
            עבור יחידות אלו אין צורך בהזנות פרט. כלל הדיווחים יוזנו ע”י סגל
            המשא”ן בעורף בתיאום עם קצין המשא”ן המנהל את כ”א בחזית.
          </p>
          <img src={ControlImg} alt="ControlImg" className="ControlImg" />
        </div>
      )}
      {page === 1 && <div className="infoSlide-content">
        <div className="infoSlide-card">
          <p>
            לטובת השליטה בצה״ל לאורך תקופת הלחימה, הוגדר כי בימים שישי ושבת
            יישומון דו״ח 1 יהיה פתוח להזנת פרט ומפקד בלבד ללא אישור קצין משא״ן.
            את נתוני ההזנה ניתן לראות במערכת ״תנופה״ במסך ״שליטה בכ״א - דו״ח 1״.
          </p>

          <p>
            <strong>נוהל הזנה בשישי:</strong> דיווח פרט ומפקד פתוחים בשעות
            <br />
            8:00-12:00
          </p>

          <p>
            <strong>נוהל הזנה בשבת:</strong> דיווח פרט ומפקד פתוחים בשעות
            <br />
            19:30-23:00
          </p>
        </div>

        <img src={weekendKtzina} alt="weekendKtzina" className="infoImg infoImg-weekendKtzina" />
        <img src={weekendGirl} alt="weekendGirl" className="infoImg infoImg-weekendGirl" />
        <img src={weekendGuy} alt="weekendGuy" className="infoImg infoImg-weekendGuy" />
      </div>}
    </div>
  );
}

export default ControlHR;
