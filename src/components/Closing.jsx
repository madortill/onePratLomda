import React from "react";
import { useState } from "react";
import "../css/Closing.css";

import ClosePrat1 from "./ClosePrat1";
import ReviewPrat1 from "./ReviewPrat1";

function Closing({ changeSection, startingPage }) {
  const [page, setPage] = useState(startingPage);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 1,
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
    <div className="Closing">
      {page === 0 && (
        <ReviewPrat1
          changePage={handleChangePage}
          changeSection={handleChangeSection}
        />
      )}
      {page === 1 && (
        <ClosePrat1
          changePage={handleChangePage}
          changeSection={handleChangeSection}
          startPage={startPage}
        />
      )}
    </div>
  );
}

export default Closing;
