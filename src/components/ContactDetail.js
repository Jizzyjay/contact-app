import React from "react";
import { Link } from "react-router-dom";
import user from "../images/img.jpeg";

const ContactDetail = (props) => {
    const {/*name, email */} = props.location.state.contact;
    
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">John</div>
                    <div className="description">jizzyjay@gmail.com</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button classname="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;