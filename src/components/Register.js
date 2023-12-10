import React, { useState } from "react";
import Input from "./Input";
import css from "./register.module.css";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        passwordConfirm: "",
    });
    const history = useHistory();
    const handleInputChange = (identifier, event) => {
        setEnteredValues((prev) => {
            return {
                ...prev,
                [identifier]: event.target.value,
            };
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted", enteredValues);
        if (enteredValues.password !== enteredValues.passwordConfirm) {
            alert("Passwords don't match");
            return;
        }
    };
    const closeHandler = (e) => {
        setEnteredValues({
            email: "",
            password: "",
            name: "",
            address: "",
            passwordConfirm: "",
        });
        history.push("/");
    };
    return (
        <form onSubmit={submitHandler} className={css.container}>
            <div className={css.header}>
                <h1>Register</h1>
            </div>
            <p className={css.closebtn} onClick={closeHandler}>
                X
            </p>
            <Input
                type="text"
                id="name"
                name="name"
                label="Name"
                placeholder="John Doe"
                minLength={2}
                required
                value={enteredValues.name}
                onChange={(e) => handleInputChange("name", e)}
            />
            <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                placeholder="john@example.com"
                required
                value={enteredValues.email}
                onChange={(e) => handleInputChange("email", e)}
            />
            <Input
                type="password"
                id="password"
                name="password"
                label="Password"
                placeholder="Password"
                minLength={4}
                maxLength={8}
                required
                value={enteredValues.password}
                onChange={(e) => handleInputChange("password", e)}
            />
            <Input
                type="password"
                id="password"
                name="password"
                label="Password-confirm"
                placeholder="Confirm password"
                minLength={4}
                maxLength={8}
                required
                value={enteredValues.passwordConfirm}
                onChange={(e) => handleInputChange("passwordConfirm", e)}
            />
            <Input
                type="text"
                id="address"
                name="address"
                label="Address"
                placeholder="123 Main St"
                required
                value={enteredValues.address}
                onChange={(e) => handleInputChange("address", e)}
            />
            <div className={css.btnwrapper}>
                <button type="submit">Register</button>
                <button
                    type="reset"
                    onClick={() => {
                        setEnteredValues({
                            email: "",
                            password: "",
                            name: "",
                            address: "",
                            passwordConfirm: "",
                        });
                    }}>
                    Reset
                </button>
            </div>
        </form>
    );
};

export default Register;
