import React, { useState } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Abhinav H Kamath</div>
      <div className="menu">
        <div className="web-menu">
          {" "}
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>

          {isOpen && <Mobile isOpen={isOpen} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
