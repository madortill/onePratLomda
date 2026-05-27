import React from "react";
import { useState } from "react";
import "../css/ClosePrat1.css";

import ClosePrat1End from "./ClosePrat1End";
import ReviewPrat1 from "./ReviewPrat1";

function ClosePrat1({ changeSection, startingPage }) {
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
  return (
    <div className="ClosePrat1">
      {page === 0 && (
        <ReviewPrat1
          changePage={handleChangePage}
          changeSection={handleChangeSection}
        />
      )}
      {page === 1 && (
        <ClosePrat1End
          changePage={handleChangePage}
          changeSection={handleChangeSection}
          startPage={startPage}
        />
      )}
    </div>
  );
}

export default ClosePrat1;
