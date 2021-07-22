import React, { Component, useState, useEffect } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Modal, Row, Col } from "react-bootstrap";
import '../css/TopNavBar.css';
import { ACCESS_TOKEN, Email } from '../constants/const.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
const TopNavbar = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSign, setIsSign] = useState(false)
    const LoginIn = (email) => {
        setEmail(email);
    }
    const handleLogOut = () => {
        setEmail("");
        setIsSign(false);
        localStorage.clear();
        console.log("logout");
    }

    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN) && localStorage.getItem(Email)) {
            setEmail(localStorage.getItem(Email));
            setIsSign(true);
        } else {
            setEmail("");
            localStorage.clear();
            setIsSign(false);
        }

    }, [email, localStorage.getItem(Email)])

    return (
        <div>
            <Navbar bg="#282c34" variant="dark" expand="lg">
                <Navbar.Brand href="/">Bitwoohoo!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contactus">Contact</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    {(() => {
                        if (isSign) {
                            return (
                                <Form inline>
                                    <Row>
                                        <Col> <Form.Label>{email}</Form.Label></Col>
                                        <Col>
                                            <Button variant="primary" onClick={handleLogOut} >
                                                Log out
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            )

                        } else {
                            return (
                                <Form inline>
                                    <Login onButtonClick={LoginIn} />
                                    <SignUp />
                                </Form>
                            )

                        }
                    })()}


                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};
export default TopNavbar