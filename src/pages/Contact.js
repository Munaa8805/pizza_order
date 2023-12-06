import React from "react";
import Phone from "../components/Phone";
import css from "./contact.module.css";
import Subtitle from "../components/Subtitle";

const Contact = () => {
    return (
        <div className={css.container}>
            <Subtitle>Contact us</Subtitle>
            <Phone />
        </div>
    );
};

export default Contact;
