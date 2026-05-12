import React from "react";
import { useState } from "react";
import "./css/App.css";

import til from "./assets/images/til.svg";
import bahad11 from "./assets/images/bahad11.png";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import MobileWarningOverlay from "./components/MobileWarningOverlay";
import Principles from "./components/Principles";

function App() {
  const [section, setSection] = useState(0);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    0: 1,
    1: 2,
    2: 6,
    3: 3,
    4: 1,
  };
  const handleChangeSection = (targetSection, returnToLast = false) => {
    // חזרה לתפריט הראשי
    if (targetSection === 6) {
      setSection(0);
      return;
    }

    setSection(targetSection);

    setSectionStartPages((prev) => ({
      ...prev,
      [targetSection]: returnToLast
        ? SECTION_RETURN_PAGE_MAP[targetSection] ?? 0
        : 0,
    }));

    setNavSection((prev) => (targetSection > prev ? targetSection : prev));
  };
  return (
    <>
      <MobileWarningOverlay />
      <div className="app">
        <img src={bahad11} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />
        {section === 0 && (
          <Start
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[0] ?? 0}
          />
        )}
        {section === 1 && <Principles  changeSection={handleChangeSection}
            startingPage={sectionStartPages[1] ?? 0} />}
        {section > 0 && (
          <NavBar
            currentSection={section}
            changeSection={handleChangeSection}
          />
        )}
      </div>
    </>
  );
}

export default App;
