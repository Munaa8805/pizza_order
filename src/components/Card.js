import React from "react";
import css from "./card.module.css";

const Card = ({ image, price, description, name }) => {
    return (
        <div className={css.container}>
            <div className={css.image_container}>
                <img src={image} alt={name} />
            </div>
            <div className={css.text_container}>
                <div className={css.text}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
                <p className={css.price}>${price}</p>
            </div>
            <div
                style={{
                    padding: "8px 16px",
                }}>
                <div className={css.btn}>Select</div>
            </div>
        </div>
    );
};

export default Card;
