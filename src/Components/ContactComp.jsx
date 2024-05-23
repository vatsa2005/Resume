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
                 <p>{props.name}</p>
            </div>
        </div>
    );
}

export default ContactComp;



