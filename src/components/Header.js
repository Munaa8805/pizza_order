import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import UserHook from "../context/UserCtx";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import css from "./header.module.css";

function Header() {
    const userCtx = useContext(UserHook);
    const history = useHistory();

    const logoutHandler = () => {
        userCtx.setUserData({});
        userCtx.setIsUserLoggedIn(false);
        localStorage.removeItem("pizzatoken");
        localStorage.removeItem("pizzaUser");
        history.push("/");
    };

    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-body-tertiary bg-light">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <p className={css.logo}>BC PIZZA</p>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Item>Home</Nav.Item>
                            </LinkContainer>
                            <LinkContainer to="/menu">
                                <Nav.Item>Menu</Nav.Item>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Item>About</Nav.Item>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Item>Contact</Nav.Item>
                            </LinkContainer>
                        </Nav>
                        {userCtx.isUserLoggedIn ? (
                            <Nav>
                                <NavDropdown
                                    style={{
                                        color: "#55595c",
                                        fontSize: "16px",
                                    }}
                                    title={userCtx.userData.name}
                                    id="basic-nav-dropdown">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item
                                            style={{
                                                color: "#55595c",
                                                fontSize: "16px",
                                            }}>
                                            About me
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/orders">
                                        <NavDropdown.Item
                                            style={{
                                                color: "#55595c",
                                                fontSize: "16px",
                                            }}>
                                            Orders
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/password-change">
                                        <NavDropdown.Item
                                            style={{
                                                color: "#55595c",
                                                fontSize: "16px",
                                            }}>
                                            Password change
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                        href="#"
                                        onClick={logoutHandler}>
                                        <p className={css.logout}>Logout</p>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        ) : (
                            <Nav>
                                <LinkContainer to="/login" id="login">
                                    <Nav.Item>Login</Nav.Item>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Item id="register">Register</Nav.Item>
                                </LinkContainer>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
