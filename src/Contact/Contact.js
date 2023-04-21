

import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>CONTACT</h1>
      <div className="contact__container">
        <p>
         📩 Email : <span>srpp27@gmail.com</span>
        </p>
        <p>
         📲 Phone : <span>8765382827</span>
        </p>
        
      </div>
    </Element>
  );
};

export default Contact;