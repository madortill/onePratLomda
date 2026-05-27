import React from "react";
import { useState } from "react";
import "../css/War.css";
import HaravotBarzel from "./HaravotBarzel";

function War({ changeSection, startingPage }) {
  const [page, setPage] = useState(startingPage);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
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
    <div className="War">
      {page === 0 && (
        <HaravotBarzel
          changePage={handleChangePage}
          changeSection={handleChangeSection}
        />
      )}
    </div>
  );
}

export default War;
