import "./styles/home.css";
import linkedin from "./assets/linkedin.svg";
import Instagram from "./assets/Instagram.svg";
import github from "./assets/github.svg";
import X from "./assets/X.svg";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import Menu from "./Menu";
import ForwardArrow from "./ForwardArrow";



function Home() {
  const paraText = "  My name is S Srivatsa, a student at SRM Ramapuram with a strong foundation in HTML, CSS, Javascript, React, and Firebase. The logic and creativity of crafting user interfaces have always captivated me. Beyond these, I'm constantly eager to learn new technologies, and I'm particularly interested in the potential of Artificial Intelligence. While playing the violin and physics are my hobbies, my true passion lies in coding. Let me guide you through the way. Click the arrow to move to the next page. Click the menu bar to navigate to your desired page.";
  return(
   <div className= "home">
    <div className="left">
      <div className="icons">
        <div className="icon-item linkedin">
          <a href = "https://www.linkedin.com/in/srivatsa-s-84b258297" target="_blank"><img src={linkedin} alt="linkedin" /></a>
        </div>
        <div className="icon-item instagram">
          <a href="https://www.instagram.com/its_me_vatsa/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
        </div>
        <div className="icon-item github">
          <a href="https://github.com/vatsa2005" target="_blank"><img src={github} alt="github" /></a>
        </div>
        <div className="icon-item x">
          <a href="https://twitter.com/Vatsa5002" target="_blank"><img src={X} alt="X" /></a>
        </div>
      </div>  
    </div>
    <div className="center">
      <div className="content">
        <p><TypeAnimation sequence={[paraText]} speed={150} /></p>
      </div>
    </div>
    <div className="right">
      <div className="menu">
        <div className="menu-align">
          <div className="clickable">
            <Menu size={40} />
          </div>
        </div>
    </div>
      <div className="arrow-comp">
        <ForwardArrow link="/skills" size={40} />
      </div>
    </div>
  </div>
  );
}
export default Home;


