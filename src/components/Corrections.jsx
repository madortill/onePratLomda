import React from 'react'
import { useState } from "react";
import "../css/Corrections.css";
import FillDigital from './FillDigital';

function Corrections({changeSection, startingPage}) {
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
    <div className='Corrections'>
     {page === 0 && <FillDigital changePage={handleChangePage} changeSection={handleChangeSection}/>}
    </div>
  )
}

export default Corrections
