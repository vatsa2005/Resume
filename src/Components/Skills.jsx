import "./styles/skills.css";
import Menu from "./Menu";
import ForwardArrow from "./ForwardArrow";
import ReverseArrow from "./ReverseArrow";
import SkillComp from "./SkillComp";
import skillsets from "./skillsets";
import { useState } from "react";

function Skills() {
    const [localSkills, setLocalSkills] = useState([skillsets]);
    return(
        <div className="skills">
            <div className="left left-skill">
                <div className="arrow-comp">
                    <ReverseArrow link="/" size={40} />
                </div>
            </div>
            <div className="center center-skill">
                <div className="title skills-header">
                    <div className="header-text">
                        <h1>Skills</h1>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content-body skills-body">
                    {Object.values(localSkills).map((langs) => { //Getting the object
                        return Object.values(langs).map((val) => { // Getting the array
                            return <SkillComp name={val[0]} icon={val[1]} link={val[2]} />
                        });
                    })}
                    
                </div>
                
            </div>
            <div className="right right-skills">
                <div className="menu">
                    <div className="menu-align">
                        <div className="clickable">
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className="arrow-comp">
                    <ForwardArrow link="/projects" />
                </div>
            </div>
        </div>
    )
}

export default Skills;

