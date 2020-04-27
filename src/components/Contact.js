import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Kontakt</h1>
      <div className="icons-container">
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
          {/* <p className="contact-text"> */}
          <a
            className="contact-text contact-link"
            href="https://www.instagram.com/tomalski1986/">
            @tomalski1986
          </a>
          {/* </p> */}
        </div>

        <p className="contact-dots">·</p>
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
          <p className="contact-text">tomalski1986@gmail.com</p>
        </div>
        <p className="contact-dots">·</p>
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
          {/* <p className="contact-text"> */}
          <a
            className="contact-text contact-link"
            href="https://www.youtube.com/channel/UCOUXpUCFKGvMcHrvpJnraew">
            @tomalski1986
          </a>
          {/* </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
