import React from "react";
import TmlLogo from "../assets/logo2.png";
import {Link, animateScroll as scroll} from "react-scroll";
import navbarLinks from "./NavbarLinks";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container">
        <img
          className="navbar-logo"
          src={TmlLogo}
          alt="tml logo"
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
      </div>
      <div className="navbar-items-container">
        <ul className="navbar-items">
          {navbarLinks.map((navbarLink) => (
            <Link
              className="navbar-item"
              activeClass="active"
              to={navbarLink.id}
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              key={navbarLink.id}>
              {navbarLink.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
