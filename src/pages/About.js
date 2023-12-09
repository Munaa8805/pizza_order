import React from "react";
import css from "./about.module.css";
import pizzahut from "../assets/pizza_hut.png";

const About = () => {
    return (
        <div className={css.container}>
            <img
                src={pizzahut}
                alt=""
                style={{
                    width: "300px",
                    height: "300px",
                }}
            />
            <div className={css.content}>
                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer suscipit luctus quam, vitae dictum augue blandit
                    non. Suspendisse eget felis volutpat, venenatis urna nec,
                    ornare urna. Pellentesque augue ligula, molestie ut enim ut,
                    pulvinar sollicitudin nisi. Nullam facilisis pharetra ligula
                    sit amet condimentum. Fusce non velit non arcu commodo
                    interdum vel ac augue. Nam placerat orci quis mauris
                    bibendum ornare. Quisque pretium pulvinar nibh, vitae
                    dignissim dui bibendum vel. Quisque at metus egestas,
                    condimentum nibh sed, sagittis ipsum. Morbi ac accumsan
                    mauris, in pharetra tortor. Donec dolor est, convallis eu
                    massa maximus, dictum aliquet nulla. Suspendisse facilisis
                    diam quis tortor iaculis cursus. Duis in dolor malesuada,
                    mattis nulla quis, posuere ex. Duis ligula mauris, porta ut
                    ex commodo, ornare venenatis dolor. Vivamus quis nulla
                    tempor, lacinia nibh eget, posuere elit. Nulla accumsan erat
                    eu risus tincidunt, vel auctor felis venenatis. Etiam a
                    neque venenatis, ultrices ipsum ac, iaculis mi. Phasellus
                    hendrerit lacus in orci dignissim placerat.
                </p>
            </div>
        </div>
    );
};

export default About;
