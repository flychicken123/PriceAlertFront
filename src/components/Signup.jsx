import React, { Component, useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Modal } from "react-bootstrap";

const Login = () => {
    const handleRegClose = () => setShowReg(false);
    const handleRegShow = () => setShowReg(true);
    const [showReg, setShowReg] = useState(false);
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [error, setErrors] = useState("");
    function validateForm() {
        return emailReg.length > 0 && passwordReg.length > 0;
    }
    const requestBody =
    {
        email: emailReg,
        password: passwordReg
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://localhost:3306/api/v1/account/register',
            {
                method: 'POST',
                body: JSON.stringify(requestBody),
                url: 'http://localhost:3306',
                headers: { 'Content-Type': 'application/json' },

            }).then(response => {
                if (response.ok) {
                    handleRegClose();
                    return response;
                } else {
                    setErrors("Email has already been registered");
                }
            }).catch(error => {
                console.log(error);
                setErrors(error)
            });
    }
    return (
        <div>
            <Button variant="outline-success" onClick={handleRegShow}>Sign up</Button>


            <Modal show={showReg} onHide={handleRegClose} animation={false} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={emailReg}
                                onChange={(e) => setEmailReg(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={passwordReg}
                                onChange={(e) => setPasswordReg(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit} disabled={!validateForm()} >
                        Sign up
                     </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Login;