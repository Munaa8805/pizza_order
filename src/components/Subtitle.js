import React from "react";
import css from "./subtitle.module.css";

const Subtitle = ({ children, style }) => {
    return (
        <span
            style={{
                ...style,
            }}>
            {children}
        </span>
    );
};

export default Subtitle;
