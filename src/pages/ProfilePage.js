import React, { useContext, useEffect, useState } from "react";
import css from "./profilepage.module.css";
import UserHook from "../context/UserCtx";
import Input from "../components/Input";
import { getLocalStorage } from "../utils/LocalStorage";

const ProfilePage = () => {
    const [enteredValues, setEnteredValues] = useState({
        name: "",
        email: "",
        address: "",
    });

    const userCtx = useContext(UserHook);
    useEffect(() => {
        if (localStorage.getItem("pizzaUser")) {
            let user = JSON.parse(localStorage.getItem("pizzaUser"));
            setEnteredValues({
                name: user.name,
                email: user.email,
                address: user.address,
            });
        }
    }, []);
    const updateHandler = (e) => {
        e.preventDefault();
        fetch(
            "https://pizzabackend-6am6.onrender.com/api/v1/auth/updatedetails",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    name: enteredValues.name,
                    email: enteredValues.email,
                    address: enteredValues.address,
                }),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    userCtx.setUserData(res.data);
                    getLocalStorage(res);
                    userCtx.setIsUserLoggedIn(true);
                } else {
                    alert(res.error);
                }
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className={css.container}>
            <h1>Profile Page</h1>
            <div>
                <form onSubmit={updateHandler}>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        label="Name"
                        placeholder="John Doe"
                        minLength={2}
                        required
                        value={enteredValues.name}
                        onChange={(e) =>
                            setEnteredValues({
                                ...enteredValues,
                                name: e.target.value,
                            })
                        }
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="john@example.com"
                        required
                        value={enteredValues.email}
                        onChange={(e) =>
                            setEnteredValues({
                                ...enteredValues,
                                email: e.target.value,
                            })
                        }
                    />
                    <Input
                        type="text"
                        id="address"
                        name="address"
                        label="Address"
                        placeholder="123 Main St, Anytown, USA"
                        required
                        value={enteredValues.address}
                        onChange={(e) =>
                            setEnteredValues({
                                ...enteredValues,
                                address: e.target.value,
                            })
                        }
                    />
                    <div className={css.btncontainer}>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
