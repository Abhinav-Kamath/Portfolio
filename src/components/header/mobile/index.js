import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setOpen }) {
  return (
    <div className="mobile">
      <div className="close" onClick={() => setOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fi-rr-edit-alt option-icon"></i> Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop option-icon"></i> Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i class="fi-rr-briefcase option-icon"></i> Experience
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-form"></i> Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
