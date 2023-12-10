import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./form.module.css";

const Form = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
    });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", enteredValues);
        if (enteredValues.email === "" || enteredValues.password === "") {
            alert("Please enter email and password");
            return;
        }
        // if (enteredValues.password.length >= 4) {
        //     alert("Password must be at most 4 characters long");
        //     return;
        // }
        // if (enteredValues.password.length < 8) {
        //     alert("Password must be at least 8 characters long");
        //     return;
        // }
        if (enteredValues.email.includes("@") === false) {
            alert("Email must be at correct format");
            return;
        }
    };
    const closeHandler = (e) => {
        history.push("/");
    };
    const handleInputChange = (identifier, event) => {
        setEnteredValues((prev) => {
            return {
                ...prev,
                [identifier]: event.target.value,
            };
        });
    };
    const resetHandler = (e) => {
        // e.target.reset();

        setEnteredValues({
            email: "",
            password: "",
        });
    };
    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <p className={css.closebtn} onClick={closeHandler}>
                X
            </p>
            <div className={css.logowrapper}>
                <img
                    src="https://www.pizzahut.ca/order/images/icons/favicon-32x32.65f9b447ff4e576d03ad65d900e0a4d0.png"
                    alt="logo"
                />
            </div>
            <div className={css.wrapper}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={enteredValues.email}
                    onChange={(e) => handleInputChange("email", e)}
                />
            </div>
            <div className={css.wrapper}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={4}
                    maxLength={8}
                    value={enteredValues.password}
                    onChange={(e) => handleInputChange("password", e)}
                />
            </div>
            <div className={css.btnwrapper}>
                <button type="submit">Login</button>
                <button type="reset" onClick={(e) => resetHandler(e)}>
                    Reset
                </button>
            </div>
        </form>
    );
};

export default Form;
