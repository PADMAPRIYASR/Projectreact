import React, { useState } from "react";
import "./Project.css";

const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
   
          <div className="project__content">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p> <img src={img} alt="" /></p>
            </a>
          </div>
        )}
      

export default Project;