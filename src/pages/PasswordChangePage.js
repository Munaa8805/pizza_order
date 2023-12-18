import React from "react";
import PasswordChange from "../components/PasswordChange";
import css from "./passwordchangepage.module.css";

function PasswordChangePage() {
    return (
        <div className={css.container}>
            <PasswordChange />
        </div>
    );
}

export default PasswordChangePage;
