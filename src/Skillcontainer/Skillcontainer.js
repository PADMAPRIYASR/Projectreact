import React from "react";
import "./Skillcontainer.css";
import skillImg from "../assets/img1.webp";

import { Element } from "react-scroll";

const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="Hobbies">
      <div className="skillcontainer__image">
        <img src={skillImg} alt="" />
        
      </div>
      <div className="skillcontainer__text">
        <h1> MY HOBBIES</h1>
        <div className="skillcontainer__skillSet">
          <h3>🐾 Cooking🍉</h3>
         
          <h5>I love cooking. It's one of my favorite things to do.</h5> 
          <h5>To share my  recipes  with my people is just something very special to me.</h5>
          <img src="https://wallpapercave.com/wp/wp9097336.jpg" width={200} height={200} ></img>
          
        </div>
        <div className="skillcontainer__skillSet">
        <h3>🐾 Gardening🪴</h3>
        <h5>The glory of gardening: hands in the dirt, head in the sun, heart with nature.</h5>
        <h5>To nurture a garden is to feed not just the body, but the soul.</h5>
        <img src="https://wallpapercave.com/wp/wp11943629.jpg" width={200} height={200} ></img>
          
        </div>
        <div className="skillcontainer__skillSet">
          <h3>🐾 Reading📖</h3>
          <h5>It wasn't until I started reading and found books they wouldn't let us read in school that </h5>
          <h5>I discovered you could be insane and happy and have a good life without being like everybody else.</h5>
          <img src="https://wallpapercave.com/dwp2x/wp8184046.jpg" width={200} height={200} ></img>
          
        </div>
        <div className="skillcontainer__skillSet">
        <h3>🐾 Writing🖊️</h3>
        <h5>Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you.</h5>
        <h5>figure out what you have to say. It’s the one and only thing you have to offer.</h5>
        <img src="https://wallpapercave.com/dwp2x/wp11633655.jpg" width={200} height={200} ></img>
          
        </div>
        <div className="skillcontainer__skillSet">
          <h3>🐾 Drawing🎨</h3>
          <h5>One must always draw, draw with the eyes, when one cannot draw with a pencil. </h5>
          <h5> One fine day you discover, Photography is an immediate reaction, drawing is a meditation.</h5>
          <img src="https://wallpapercave.com/dwp2x/wp11650048.png" width={200} height={200} ></img>
         
        </div>
        
      </div>
    </Element>
  );
};

export default Skillcontainer;