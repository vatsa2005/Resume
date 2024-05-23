import "./styles/hobbyComp.css";
function HobbyComp(props) {
    return(
        <div className="hobby-comp">
            <a href={props.link} target="_blank">
                <div className="hobby-icon">
                    <img src={props.icon} alt="hobby Icon" />
                </div>
            </a>
            <div className="hobby-name">
                 <p>{props.name}</p>
            </div>
        </div>
    )
}


export default HobbyComp;

