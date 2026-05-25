import React from "react";
import { useState } from "react";
import "../css/Corrections.css";
import FillDigital from "./FillDigital";
import Prat1Journey from "./Prat1Journey";
import Retro from "./Retro";
import Prat1Changes from "./Prat1Changes";
import FixPrat1 from "./FixPrat1";
import FixPractice from "./FixPractice";

function Corrections({ changeSection, startingPage }) {
  const [page, setPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 2,
  };
  const handleChangePage = (targetPage, returnToLast = false) => {
    setPage(targetPage);
    if (returnToLast) {
      setStartPage(pagesMap[targetPage]);
    } else {
      setStartPage(0);
    }
  };
  const handleChangeSection = (section, returnToLast = false) => {
    if (changeSection) changeSection(section, returnToLast);
  };
  return (
    <div className="Corrections">
      {page === 0 && (
        <FillDigital
          changePage={handleChangePage}
          changeSection={handleChangeSection}
        />
      )}
      {page === 1 && <Prat1Journey changePage={handleChangePage} startPage={startPage} />}
      {page === 2 && <Retro changePage={handleChangePage} />}
      {page === 3 && <Prat1Changes changePage={handleChangePage}/>}
      {page === 4 && <FixPrat1 changePage={handleChangePage}/>}
      {page === 5 && <FixPractice changePage={handleChangePage} startPage={startPage}/>}
    </div>
  );
}

export default Corrections;
