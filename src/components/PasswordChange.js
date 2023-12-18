import React, { useState, useContext } from "react";
import css from "./passwordchange.module.css";
import Background from "./Background";
import Input from "./Input";
import UserHook from "../context/UserCtx";
import { useHistory } from "react-router-dom";
import { getLocalStorage } from "../utils/LocalStorage";

const PasswordChange = () => {
    const [enteredValues, setEnteredValues] = useState({
        currentPassword: "",
        newPassword: "",
    });
    const userCtx = useContext(UserHook);
    const history = useHistory();
    const handleInputChange = (identifier, event) => {
        setEnteredValues((prev) => {
            return {
                ...prev,
                [identifier]: event.target.value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(
            "https://pizzabackend-6am6.onrender.com/api/v1/auth/updatepassword",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    currentPassword: enteredValues.currentPassword,
                    newPassword: enteredValues.newPassword,
                }),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    getLocalStorage(res);
                    userCtx.setUserData(res.data);
                    userCtx.setIsUserLoggedIn(true);

                    resetHandler();
                    history.push("/");
                } else {
                    alert(res.error);
                    resetHandler();
                }
            })
            .catch((err) => {
                alert(err.message);
            })
            .finally(() => {
                resetHandler();
            });
    };
    const resetHandler = () => {
        setEnteredValues({
            currentPassword: "",
            newPassword: "",
        });
    };
    const closeHandler = () => {
        history.push("/");
    };
    return (
        <Background>
            <form onSubmit={handleSubmit} className={css.container}>
                <div className={css.header}>
                    <h2>Change Password</h2>
                </div>
                <p className={css.closebtn} onClick={closeHandler}>
                    X
                </p>
                <Input
                    id="currentPassword"
                    placeholder="********"
                    type="password"
                    minLength={4}
                    maxLength={8}
                    name="currentPassword"
                    label="Current Password"
                    required
                    value={enteredValues.currentPassword}
                    onChange={(e) => handleInputChange("currentPassword", e)}
                />
                <Input
                    label="New Password"
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    minLength={4}
                    maxLength={8}
                    value={enteredValues.newPassword}
                    onChange={(e) => handleInputChange("newPassword", e)}
                />
                <div className={css.btncontainer}>
                    <button type="submit">Submit</button>
                    <button type="text" onClick={resetHandler}>
                        Reset
                    </button>
                </div>
            </form>
        </Background>
    );
};

export default PasswordChange;
