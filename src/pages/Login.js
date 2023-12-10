import React from "react";
import Background from "../components/Background";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";

const Login = () => {
    const history = useHistory();
    const closeHandler = () => {
        history.push("/");
    };
    return (
        <Background onClick={closeHandler}>
            <Form />
        </Background>
    );
};

export default Login;
