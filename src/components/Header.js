import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import css from "./header.module.css";

function Header() {
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
                        <Nav>
                            <LinkContainer to="/login" id="login">
                                <Nav.Item>Login</Nav.Item>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Item id="register">Register</Nav.Item>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
