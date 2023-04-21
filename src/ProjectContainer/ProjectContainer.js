import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img3.jpg";
import img3 from "../assets/img4.jpg";


const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: img1,
      title: "Mumbai",
      desc:
        "The city of Dreams ",
      link: "https://en.wikipedia.org/wiki/Mumbai/",
    },
    {
      img: img2,
      title: "Hyderabad",
      desc:
        "The city of Pearls",
      link: "https://en.wikipedia.org/wiki/Hyderabad/",
    },
    {
      img: img3,
      title: "Kerala",
      desc:
        "God's own place",
      link: "https://en.wikipedia.org/wiki/Kerala/",
    },
    
  ];

  return (
    <Element className="projectContainer" id="Travel">
      <h1>ADVENTURE AWAITS</h1>
      <h3>
      Traveling for me puts things into perspective. It allows me to realize that there are far bigger things that my problems.</h3> 
      <h3>So what if the wifi is slow or if my favorite sandwich place is closed. </h3>
      <h3>Traveling allows you to see that the world is not always about you. </h3>
      <h3>It allows me to see how other people live and what they have to deal with on a daily basis</h3>
      <img src="https://wallpapercave.com/dwp2x/wp9028980.jpg" width={500} height={350} ></img>
      
      <div className="projectContainer__title">
        <h2
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
          PLACES
        </h2>
        
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;