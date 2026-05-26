import React from "react";
import { useState } from "react";
import "../css/DifferentInput.css";

import SpecialInput from "./SpecialInput";

function DifferentInput({ changeSection, startingPage }) {
  const [page, setPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 1,
    5: 1,
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
  return <div className="DifferentInput">
   {page === 0 && <SpecialInput changePage={handleChangePage}
          changeSection={handleChangeSection} startPage={startPage}/>}
  </div>;
}

export default DifferentInput;
