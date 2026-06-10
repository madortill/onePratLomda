import React, { useEffect, useRef, useState } from "react";
import ktzina from "../assets/images/ktzina-pocket.png";
import phone from "../assets/images/endPhone.svg";
import restartBtn from "../assets/images/restartBtn.svg";

function End({ changeSection, fullName }) {
  const nameRef = useRef(null);
  const [fontSize, setFontSize] = useState(1.8);

  const restart = () => {
    changeSection(0);
  };

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    let size = 1.8;

    el.style.fontSize = `${size}rem`;

    while (el.scrollWidth > el.clientWidth && size > 0.6) {
      size -= 0.05;
      el.style.fontSize = `${size}rem`;
    }

    setFontSize(size);
  }, [fullName]);

  return (
    <div className="end">
      <img src={ktzina} alt="ktzina-end" className="ktzina-end" />

      <div className="phone-end">
        <img src={phone} alt="phone-img" className="phone-end-img" />

        <p
          ref={nameRef}
          className="phone-name"
          style={{ fontSize: `${fontSize}rem` }}
        >
          {fullName}
        </p>
      </div>

      <img
        src={restartBtn}
        alt="restartBtn"
        className="restartBtn"
        onClick={restart}
      />
    </div>
  );
}

export default End;