import React from "react";
import "../css/FlipCard.css";

function FlipCard({
  id,
  front,
  back,
  onFlip,
  variant = "dark",
  width = "7.4rem",
  height = "11rem",
}) {
  const handleMouseEnter = () => {
    onFlip?.(id);
  };

  return (
    <div
      className="flipCard"
      onMouseEnter={handleMouseEnter}
      style={{
        "--card-width": width,
        "--card-height": height,
      }}
    >
      <div className="flipCardInner">
        <div className={`flipCardFace flipCardFront ${variant}`}>
          {front}
        </div>

        <div className={`flipCardFace flipCardBack ${variant}`}>
          {back}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;