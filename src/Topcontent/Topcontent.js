import React from "react";
import "./Topcontent.css";

const Topcontent = ({ setSelected }) => {
  return (
  
      <div className="topContent" >
        <div className="topContent__container">
          <h1>Padma Priya S R </h1>
          <h3>Just a girl who is clearly deep in thought, journeying through</h3>
           <h3>some creative stream only she could sense.</h3>
          <a
            href="https://www.google.com/search?q=explore+places+quotes&rlz=1C1ONGR_enIN929IN929&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZ16bu8qz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="topContent__downloadButton">Explore</button>
          </a>
          <h1> </h1>
          
        </div>
      </div>
   
  );
};

export default Topcontent;