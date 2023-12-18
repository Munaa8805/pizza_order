import React, { useState, useEffect } from "react";

const Ctx = React.createContext();

export const UserHook = (props) => {
    const [userData, setUserData] = useState({});
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsUserLoggedIn(true);
        }
        if (localStorage.getItem("pizzaUser")) {
            setUserData(JSON.parse(localStorage.getItem("pizzaUser")));
        }
    }, []);

    return (
        <Ctx.Provider
            value={{
                userData,
                setUserData,
                isUserLoggedIn,
                setIsUserLoggedIn,
            }}>
            {props.children}
        </Ctx.Provider>
    );
};

export default Ctx;
