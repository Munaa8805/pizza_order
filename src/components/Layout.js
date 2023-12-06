import React from "react";
import Header from "./Header";
import css from "./layout.module.css";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Container>
                <main>{props.children}</main>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
