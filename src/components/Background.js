import React from "react";
import css from "./background.module.css";

const Background = ({ children, onClick }) => {
    return <div className={css.container}>{children}</div>;
};

export default Background;
