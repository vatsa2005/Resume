import "./styles/hobbies.css";
import ReverseArrow from "./ReverseArrow";
import ForwardArrow from "./ForwardArrow";
import Menu from "./Menu";
import hobbyDetails from "./hobbyDetails";
import { useState } from "react";
import HobbyComp from "./HobbyComp";

function Hobbies() {
    const[localHobbies, setLocalHobbies] = useState([hobbyDetails]);
    return(
        <div className="hobbies">
            <div className="left left-hobbies">
                <div className="arrow-comp">
                    <ReverseArrow link="/projects" />
                </div>
            </div>
            <div className="center center-hobbies">
                <div className="title hobbies-header">
                    <div className="header-text">
                        <h1>Hobbies</h1>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content-body hobbies-body">
                    {Object.values(localHobbies).map((hobby) => {
                        return Object.values(hobby).map((val) => {
                            return <HobbyComp name={val[0]} icon={val[1]} link={val[2]} />
                        });
                    })}
                </div>
            </div>
            <div className="right right-hobbies">
                <div className="menu">
                    <div className="menu-align">
                        <div className="clickable">
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className="arrow-comp">
                    <ForwardArrow link="/contact" />
                </div>
            </div>
        </div>
    )
}

export default Hobbies;