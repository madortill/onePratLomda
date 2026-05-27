import React from "react";
import "../css/War.css";

import nextBtn from "../assets/images/nextBtn.svg";
import backBtn from "../assets/images/backBtn.svg";
import haravot from "../assets/images/haravot.svg";
import clock from "../assets/images/clock.svg";

function HaravotBarzel({ changePage, changeSection }) {
  const previousPage = () => {
    changeSection(4, true);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="HaravotBarzel">
      <img
        src={backBtn}
        alt="backBtn"
        className="backBtn"
        onClick={previousPage}
      />

      <img src={nextBtn} alt="nextBtn" className="nextBtn" onClick={nextPage} />

      <h1 className="title">הנחיות במלחמת “חרבת ברזל”</h1>

      <section className="whiteInfoBox">
        <p>
          <img src={haravot} alt="" className="sentenceIcon" />
          במסגרת “חרבות ברזל” הוחלט על הוצאת הנחיות מותאמות לסגלי המשא״ן בנושא
          דיווח דו״ח 1.
        </p>

        <p>
          <img src={haravot} alt="" className="sentenceIcon" />
          עם תחילת הלחימה - בוטלה האופציה להזנת דו״ח 1 עתידי - החל מתאריך
          3/2/2024 חזרה אפשרות זו.
        </p>

        <p>
          <img src={haravot} alt="" className="sentenceIcon" />
          לטובת שליטת בכ״א גם במהלך החופש, יישומון דו״ח 1 יעבוד במתכונת מותאמת
          בימים שישי-שבת.
        </p>
      </section>

      <section className="blackInfoBox">
        <p>
          <img src={clock} alt="" className="timeIcon" />
          יש לבצע סגירת דו״ח 1 בכל יום עד השעה 13:00, בימי ראשון ובחזרה מימי חג
          נדרש לאשר דו״ח 1 עד השעה 15:00 - נתון לשינוי בהתאם להמע״צ ע״י תוה״ד.
        </p>

        <p>
          <img src={clock} alt="" className="timeIcon" />
          במידה ומשרתים אינם זמינים להזנת דיווח פרט / מפקד ביישומון עקב סיבות
          מבצעיות בלבד, מאושר הזנה של ק. משא״ן בלבד.
        </p>
      </section>
    </div>
  );
}

export default HaravotBarzel;
