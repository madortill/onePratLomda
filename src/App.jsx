import React from "react";
import { useState } from "react";
import "./css/App.css";

import til from "./assets/images/til.svg";
import bahad11 from "./assets/images/bahad11.png";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import MobileWarningOverlay from "./components/MobileWarningOverlay";
import Principles from "./components/Principles";
import Corrections from "./components/Corrections";
import DifferentInput from "./components/DifferentInput";
import Closing from "./components/Closing";
import War from "./components/War";

function App() {
  const [section, setSection] = useState(4);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    0: 1,
    1: 1,
    2: 6,
    3: 1,
    4: 1,
    5: 5
  };
  const handleChangeSection = (targetSection, returnToLast = false) => {
    // חזרה לתפריט הראשי
    if (targetSection === 7) {
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
        {section === 1 && (
          <Principles
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[1] ?? 0}
          />
        )}
        {section === 2 && (
          <Corrections
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[2] ?? 0}
          />
        )}
        {section === 3 && (
          <DifferentInput
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[3] ?? 0}
          />
        )}
        {section === 4 && (
          <Closing
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[4] ?? 0}
          />
        )}
        {section === 5 && (
          <War
            changeSection={handleChangeSection}
            startingPage={sectionStartPages[5] ?? 0}
          />
        )}
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
