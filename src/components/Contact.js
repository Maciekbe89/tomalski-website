import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="title">Kontakt</h1>
      <div className="icons-container">
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
          <a
            className="contact-text link contact-link"
            href="https://www.youtube.com/channel/UCOUXpUCFKGvMcHrvpJnraew">
            @tomalski1986
          </a>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
          <p className="contact-text">tomalski1986@gmail.com</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
          <a
            className="contact-text link contact-link"
            href="https://www.instagram.com/tomalski1986/">
            @tomalski1986
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
