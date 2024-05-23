import "./styles/contact.css";
import ReverseArrow from "./ReverseArrow";
import Menu from "./Menu";
import ContactComp from "./ContactComp";
import myContact from "./myContact";
import { useState } from "react";

function Contact() {
    const[localContacts, setLocalContacts] = useState([myContact]);
    return(
        <div className="contact">
            <div className="left left-contact">
                <div className="arrow-comp">
                    <ReverseArrow link="/hobbies" />
                </div>
            </div>
            <div className="center center-contact">
                <div className="title contact-header">
                    <div className="header-text">
                        <h1>Contact</h1>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="content-body contact-body">
                {Object.values(localContacts).map((contact) => {
                    return Object.values(contact).map((val) => {
                        return <ContactComp name={val[0]} icon={val[1]} link={val[2]} />
                    });
                })}
                </div>
            </div>
            <div className="right right-contact">
                <div className="menu">
                    <div className="menu-align">
                        <div className="clickable">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default Contact;