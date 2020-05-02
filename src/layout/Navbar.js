import React, {useState} from "react";
import TmlLogo from "../assets/logo2.png";
import {Link, animateScroll as scroll} from "react-scroll";
import navbarLinks from "../utils/NavbarLinks";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar-container">
      <img
        className="navbar-logo"
        src={TmlLogo}
        alt="tml logo"
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
      <div className="navbar-items-container">
        <ul className={`navbar-items ${active ? "nav-active" : ""}`}>
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
        <div
          onClick={() => {
            setActive(!active);
          }}
          className={`burger ${active ? "toggle" : ""}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
