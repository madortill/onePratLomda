import React from "react";
import { useState } from "react";
import "./css/App.css";

import til from "./assets/images/til.svg";
import bahad11 from "./assets/images/bahad11.png";

function App() {

  return (
    <>
      <div className="app">

        <img src={bahad11} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />

      </div>
    </>
  );
}

export default App;
