import React from 'react'
import { useState } from "react";
import "../css/Start.css";
import StartPage from './StartPage';
import Intro from './Intro';

function Start({changeSection}) {
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
    <div className='Start'>
      {page === 0 && <StartPage changePage={handleChangePage}/>}
      {page === 1 && <Intro changePage={handleChangePage} changeSection={handleChangeSection}/>}
    </div>
  )
}

export default Start
