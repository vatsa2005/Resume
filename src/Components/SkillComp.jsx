import "./styles/skillComp.css";
function SkillComp(props) {
    return(
        
            <div className="skill-comp">
                <a href={props.link} target="_blank">
                    <div className="skill-icon">
                        <img src={props.icon} alt="Skill Icon" />
                    </div>
                </a>
                <div className="skill-name">
                     <p>{props.name}</p>
                </div>
            </div>
        
    )
}

export default SkillComp;