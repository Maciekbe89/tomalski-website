import React from "react";
import TmlLogo from "../assets/logo.png";
import {Link} from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={TmlLogo} alt="tml logo" />
      </div>
      <div className="navbar-items-container">
        <ul className="navbar-items">
          <Link
            className="navbar-item"
            activeClass="active"
            to="omnie"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}>
            o mnie
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="discography"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}>
            dyskografia
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="clips"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}>
            klipy
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="player"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}>
            player
          </Link>
          <Link
            className="navbar-item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}>
            kontakt
          </Link>
          {/* <li className="navbar-item">o mnie</li>
          <li className="navbar-item">dyskografia</li>
          <li className="navbar-item">klipy</li>
          <li className="navbar-item">player</li>
          <li className="navbar-item">kontakt</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
