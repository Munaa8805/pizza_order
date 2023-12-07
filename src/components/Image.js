import React from "react";
import css from "./image.module.css";

const Image = ({ src, desc, style }) => {
    return (
        <img src={src} alt={desc} style={{ ...style }} className={css.image} />
    );
};

export default Image;
