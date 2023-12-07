import React from "react";
import css from "./home.module.css";
import image1 from "../assets/pizza.png";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

const Home = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.content}>
                <h1>
                    Everything
                    <br /> is better <br /> with a{" "}
                    <Subtitle
                        style={{
                            fontStyle: "normal",
                        }}>
                        Pizza
                    </Subtitle>
                </h1>
                <p>
                    Pizza is the missing piece that makes every day <br />
                    complete, a simple yet delicious joy in life.
                </p>
                <div className={css.btncontainer}>
                    <Button
                        style={{
                            backgroundColor: "#f13a01",
                            color: "#fff",
                        }}>
                        Order Now
                    </Button>
                    <Button>Learn more</Button>
                </div>
            </div>
            <div className={css.image_container}>
                <img src={image1} alt="Pizza" />
            </div>
        </div>
    );
};

export default Home;
