import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./form.module.css";
import Input from "./Input";

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
        setEnteredValues({
            email: "",
            password: "",
        });
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

            <Input
                type="email"
                id="email"
                placeholder="john@example.com"
                name="email"
                label="Email"
                required
                value={enteredValues.email}
                onChange={(e) => handleInputChange("email", e)}
            />
            <Input
                label="Password"
                id="password"
                name="password"
                placeholder="********"
                type="password"
                minLength={4}
                maxLength={8}
                value={enteredValues.password}
                onChange={(e) => handleInputChange("password", e)}
            />
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
