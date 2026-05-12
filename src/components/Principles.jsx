import React from 'react'
import { useState } from "react";
import "../css/Principles.css";
import WhatIsPrat1 from './WhatIsPrat1';
import PrinciplesPrat1 from './PrinciplesPrat1';

function Principles({changeSection, startingPage}) {
    const [page, setPage] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const pagesMap = {
      0: 0,
      1: 0
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
    <div className='Principles'>
     {page === 0 && <WhatIsPrat1 changePage={handleChangePage} changeSection={handleChangeSection}/>}
    {page === 1 && <PrinciplesPrat1 changePage={handleChangePage} changeSection={handleChangeSection}/>}
    </div>
  )
}

export default Principles
