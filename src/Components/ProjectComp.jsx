import "./styles/projectComp.css";
function ProjectComp(props) {
    return(
        <div className="project-comp">
            <a href={props.link} target="_blank">
                <div className="project-icon">
                    <img src={props.icon} alt="Project Icon" />
                </div>
            </a>
            <div className="project-name">
                <div className="project-header">
                    <h4>{props.name}</h4>
                </div>
                <div className="project-desc">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectComp; 
