import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import css from "./form.module.css";
import Input from "./Input";
import UserHook from "../context/UserCtx";

const Form = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
    });
    const userCtx = useContext(UserHook);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (enteredValues.email === "" || enteredValues.password === "") {
            alert("Please enter email and password");
            return;
        }
        if (enteredValues.email.includes("@") === false) {
            alert("Email must be at correct format");
            return;
        }

        fetch("https://pizzabackend-6am6.onrender.com/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                email: enteredValues.email,
                password: enteredValues.password,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {

                    localStorage.setItem("token", res.token);
                    localStorage.setItem("pizzaUser", JSON.stringify(res.data));
                    userCtx.setUserData(res.data);
                    userCtx.setIsUserLoggedIn(true);
                    history.push("/");
                } else {

                    alert(res.error);
                    setEnteredValues({
                        email: "",
                        password: "",
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    const closeHandler = () => {
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
