import React from "react";
import Navbar from "./Navbar";
import backdrop from "../assets/images/backdrop.png";
import './Header.css'
function Header() {
  return (
    <header>
      <>
        <Navbar />
        <div className="backdrop">
          <img src={backdrop} className="asd" />
        </div>
      </>
    </header>
  );
}

export default Header;
