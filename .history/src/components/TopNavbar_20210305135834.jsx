import React, { Component } from 'react';
import{Link} from "react-router.dom";
import {Button,Navbar,Nav,NavDropDown,Form,FormControl} from "react-bootstrap";
const TopNavbar = ()=>{
    return(
        <Navbar  bg='light' expand='lg'>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                
            </Navbar.Collapse>
            
        </Navbar>
    )
}