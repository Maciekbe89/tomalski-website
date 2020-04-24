import React from "react";
import TmlLogo from "../assets/logo.png";
// import {Link} from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <img className="navbar-logo" src={TmlLogo} alt="tml logo" />
      </div>
      <ul className="navbar-items">
        <li>o mnie</li>
        <li>dyskografia</li>
        <li>klipy</li>
        <li>player</li>
        <li>kontakt</li>
      </ul>
    </nav>
  );
};

export default Navbar;
