import React, { useState } from 'react'
import "../css/NavBar.css";

function NavBar({ currentSection, changeSection }) {

    const [navSection, setNavSection] = useState(currentSection - 1)

    const topics = [
        "עקרונות",
        "הגנה ותיקון",
        "הכנות מיוחדות",
        "סגירת הדו״ח",
        "הנחיות במלחמה",
        "סיכום"
    ];

    const handleClick = (index) => {
        if(index <= navSection){
            changeSection(index);
        }
    };

  return (
    <div className='NavBar'>
        {topics.map((topic, index) => {

            const isCurrent = index === navSection;
            const isPassed = index < navSection;
            const isLocked = index > navSection;

            return (
                <button
                    key={index}
                    className={`
                        navTopic
                        ${isCurrent ? "currentTopic" : ""}
                        ${isPassed ? "passedTopic" : ""}
                        ${isLocked ? "lockedTopic" : ""}
                    `}
                    disabled={isLocked}
                    onClick={() => handleClick(index)}
                >
                    {topic}
                </button>
            )
        })}
    </div>
  )
}

export default NavBar