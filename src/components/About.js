import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="pages-container container-about" id="about">
      <div className="image-container"></div>
      <h1 className="about-title">o mnie</h1>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
        hendrerit est, vitae vehicula lectus. Sed convallis lobortis orci eget
        auctor. Integer lacinia tristique dolor et dapibus. Duis suscipit
        convallis tristique. Integer sit amet nibh a nulla dictum eleifend.
        Etiam molestie purus vehicula ex accumsan, vitae tristique nibh sodales.
        Fusce nec justo sagittis, tempor tortor quis, consectetur justo.
        Maecenas sodales neque non est porttitor, ac efficitur nisi lacinia.
      </p>
    </div>
  );
};

export default About;
