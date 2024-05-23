import "./styles/projects.css";
import ReverseArrow from "./ReverseArrow";
import ForwardArrow from "./ForwardArrow";
import Menu from "./Menu";
import projectDetails from "./projectDetails";
import ProjectComp from "./ProjectComp";
import { useState } from "react";


function Projects() {
  const[localProjects, setLocalProjects] = useState([projectDetails]);
  return (
    <div className="projects">
      <div className="left left-projects">
        <div className="arrow-comp">
          <ReverseArrow link="/skills" />
        </div>
      </div>
      <div className="center center-projects">
        <div className="title projects-header">
          <div className="header-text">
            <h1>Projects</h1>
          </div>
          <div className="line"></div>
        </div>
        <div className="content-body projects-body">
          {Object.values(localProjects).map((projectArr) => {
            return Object.values(projectArr).map((project) => {
              return <ProjectComp name={project[0]} icon={project[1]} link={project[2]} desc={project[3]} />;
            })
          })}
        </div>
      </div>
      <div className="right right-projects">
      <div className="menu">
        <div className="menu-align">
          <div className="clickable">
            <Menu />
          </div>
        </div>
      </div>
        <div className="arrow-comp">
          <ForwardArrow link="/hobbies" />
        </div>
      </div>  
    </div>
  );
}   
export default Projects;