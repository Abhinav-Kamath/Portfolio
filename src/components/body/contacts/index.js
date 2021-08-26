import React from "react";
import Socials from "../../common/socials";
import Separator from "../../common/socials/sepator/separator";
import "./contact.css";
function Contact() {
  return (
    <div className="contacts">
      <Separator />
      <label className="section-title">Contacts</label>
      <div className="contact-container">
        <p>Want to get in touch? Conatact me in any of these platforms</p>
        <div className="contact-left">
          <Socials />
        </div>
        <div className="download">
          <i class="fi-rr-cloud-download download-icon"></i>
          <div download>Download Resume</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
