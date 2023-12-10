import React from "react";
import css from "./input.module.css";

const Input = ({ label, id, ...props }) => {
    return (
        <div className={css.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} required />
        </div>
    );
};

export default Input;
