import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
const TopNavbar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-navbar-dropdown">
                        <NavDropdown.item href="#action/3.1">action</NavDropdown.item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default TopNavbar