import React, { Component, useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Modal } from "react-bootstrap";
import '../css/TopNavBar.css';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
const TopNavbar = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const LoginIn = (email) => {
        setEmail(email);
        console.log(email);
    }
    const Logout = () => {
        console.log("logout");
    }
    console.log(email);
    return (
        <div>
            <Navbar bg="#282c34" variant="dark" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contactus">Contact</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>

                        <Login onButtonClick={LoginIn} />
                        <SignUp />
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};
export default TopNavbar