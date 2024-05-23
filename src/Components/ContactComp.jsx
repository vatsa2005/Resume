import "./styles/contactComp.css";
function ContactComp(props) {
    return(
    <div className="contact-comp">
                <div className="contact-icon">
                    <a href={props.link} target="_blank">
                        <img src={props.icon} alt="contact Icon" />
                    </a>
                </div>
            <div className="contact-name">
                <a href={props.link} target="_blank">
                    <p>{props.name}</p>
                </a>
            </div>
        </div>
    );
}

export default ContactComp;



