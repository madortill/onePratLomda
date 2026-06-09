import React from "react";
import "../css/NavBar.css";

function NavBar({ currentSection, maxReachedSection, changeSection }) {
  const currentNavSection = currentSection - 1;
  const maxReachedNavSection = maxReachedSection - 1;

  const topics = [
    "עקרונות",
    "הזנה ותיקון",
    "הזנות מיוחדות",
    "סגירת הדו״ח",
    "הנחיות במלחמה",
    "סיכום",
  ];

  const handleClick = (index) => {
    if (index <= maxReachedNavSection) {
      changeSection(index + 1);
    }
  };

  return (
    <div className="NavBar">
      {topics.map((topic, index) => {
        const isCurrent = index === currentNavSection;
        const isPassed = index < currentNavSection;
        const isLocked = index > maxReachedNavSection;

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
        );
      })}
    </div>
  );
}

export default NavBar;