import React from "react";
import Socials from "../../common/socials";
import Separator from "../../common/socials/sepator/separator";
import "./contact.csss"
function Contact() {
  return (
    <div className="contacts">
      <Separator />
      <label className="section-title">Constact</label>Constact
      <div className="contact-container">
        <p>Want to get in touch? Conatact me in any of these platforms</p>
        <div className="contact-left">
          <Socials />
        </div>
        <div className="download">
          <i class='fi-rr-cloud-download download-icon'></i>
          <a download href={}>Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
