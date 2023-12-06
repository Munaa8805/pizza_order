import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import css from "./header.module.css";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <p className={css.logo}>ST PIZZA</p>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Item className="px-2">Home</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to="/menu">
                            <Nav.Item className="px-2">Menu</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Item className="px-2">About</Nav.Item>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Item className="px-2">Contact</Nav.Item>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
