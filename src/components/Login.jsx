import React, { Component, useState, useCallback, history } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Modal } from "react-bootstrap";

const Login = ({ onButtonClick }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onButtonClick(email);
        handleClose();
    });
    return (

        <div>
            <Button variant="info" className="login" onClick={handleShow}>Login</Button>

            <Modal show={show} onHide={handleClose} animation={false} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit} disabled={!validateForm()} >
                        Login
                             </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Login;