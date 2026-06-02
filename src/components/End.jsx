import React from 'react'
import ktzina from "../assets/images/ktzina-pocket.png";
import phone from "../assets/images/endPhone.svg";
import restartBtn from "../assets/images/restartBtn.svg";

function End({changeSection, fullName}) {
    const restart = () => {
        changeSection(0);
      };
  return (
    <div className='end'>
      <img src={ktzina} alt="ktzina-end" className='ktzina-end' />
      <div className='phone-end'>
        <img src={phone} alt="phone-img" className='phone-end-img' />
        <p className='phone-name'>{fullName}</p>
      </div>
      <img src={restartBtn} alt="restartBtn" className='restartBtn' onClick={restart} />
    </div>
  )
}

export default End
