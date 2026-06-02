import React from 'react'
import { useState } from "react";
import "../css/Summary.css";
import Questions from './Questions';
import Tips from './Tips';
import End from './End';

function Summary({ changeSection, fullName }) {
    const [page, setPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 1,
    1: 1
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
    <div className='Summary'>
      {page === 0 && <Questions changePage={handleChangePage}
          changeSection={handleChangeSection}   startPage={startPage}/>}
        {page === 1 &&  <Tips changePage={handleChangePage} startPage={startPage}/>}
       {page === 2 && <End  changeSection={handleChangeSection} fullName={fullName}/>}
    </div>
  )
}

export default Summary
