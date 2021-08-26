import React from "react";
import Socials from "../../common/socials";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="info">
          Hello there, I am <br />
          <span className="name">Abhinav H Kamath,</span>
          <br /> a student at IIITB
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/me.jpeg").default}
            className="picture"
          ></img>
        </div>
      </div>
      <div className="about-bottom">
        <Socials />
      </div>
    </div>
  );
}

export default About;
