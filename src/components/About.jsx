import React from 'react'
import "../css/Start.css";
import { useState } from "react";

function About() {
    const [showAbout, setShowAbout] = useState(false);
  const [infoSymbol, setInfoSymbol] = useState("i");
    const toggleAbout = () => {
        setShowAbout((prev) => !prev);
        setInfoSymbol((prev) => (prev === "i" ? "x" : "i"));
      };
  return (
    <>
      <div onClick={toggleAbout} className="aboutBtnContainer">
        <button className="about-btn">
          {infoSymbol}
        </button>
        <p>אודות</p>
      </div>
      <div className={`div-about ${showAbout ? "fade-in" : "fade-out"}`}>
        {showAbout && (
          <>
            <h3 className="list-text-about">מפתחת ראשית:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">גרפיקה:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">מומחי תוכן:</h3>
            <h3 className="list-text-about">רמ"ד טי"ל:</h3>
            <p className="list-text-about">רס"מ עדן בן חמו</p>
            <h3 className="list-text-about">גרסה:</h3>
            <p className="list-text-about">יוני 2026</p>
          </>
        )}
      </div>
    </>
  )
}

export default About
