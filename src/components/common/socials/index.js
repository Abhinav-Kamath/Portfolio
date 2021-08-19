import React from "react";
import "./socials.css";
import { socialData } from "../../social.js";
function Socials() {
  const data = socialData;
  return (
    <div className="socials">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon"></img>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
