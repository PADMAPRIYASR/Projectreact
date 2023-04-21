import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Enjoy Everyday<span></span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="About" smooth={true} duration={500}>
          <h4
            className={
              selected === "About" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("About")}
          >
            About 
          </h4>
        </Link>
        <Link to="Hobbies" smooth={true} duration={500}>
          <h4
            className={
              selected === "Hobbies" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("Hobbies")}
          >
            Hobbies
          </h4>
        </Link>
        <Link to="Travel" smooth={true} duration={500}>
        <h4
        className={
          selected === "Travel" ? "header__right--active" : undefined
        }
        onClick={() => setSelected("Travel")}
      >
        Travel
      </h4>
        </Link>
        
        <Link to="contact" smooth={true} duration={500}>
          <h4
            className={
              selected === "contact" ? "header__right--active" : undefined
            }
            onClick={() => setSelected("contact")}
          >
            Contact
          </h4>
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
