import React, {useState} from "react";
import TmlLogo from "../assets/logo2.png";
import {Link, animateScroll as scroll} from "react-scroll";
import navbarLinks from "../utils/NavbarLinks";
import "../sass/layout/_navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const onClassChange = () => {
    setActive(!active);
  };

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
          {navbarLinks.map(({id, text}) => (
            <Link
              className="navbar-item"
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              key={id}>
              {text}
            </Link>
          ))}
        </ul>
        <div
          onClick={onClassChange}
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
