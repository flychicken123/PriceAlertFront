import React, { Component, useState } from 'react';
import { Button,Navbar, Nav, NavDropdown, Form, FormControl, Modal, Col, Card } from "react-bootstrap";
import { signup, checkUsernameAvailability, checkEmailAvailability } from '../util/APIUtils.jsx';
import Notification, { notify } from 'react-notify-bootstrap'
const Login = () => {

    const handleRegShow = () => setShowReg(true);
    const [showReg, setShowReg] = useState(false);
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [error, setErrors] = useState("");
    const [agree, setAgree] = useState(false);
    const [message, setMessage] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [formErrors, setFormErrors] = useState({})
    const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');

    const findFormErrors = () => {

        const newErrors = {}
        // name errors
        if (!emailReg || emailReg === '') newErrors.email = 'select cannot be blank!'
        if(!EMAIL_REGEX.test(emailReg)) newErrors.email = 'Email not valid!'
        if(emailReg.length>40) newErrors.email = 'Email is too long (Maximum 40 characters allowed)'
        if(passwordReg.length>24) newErrors.password ='password is too long (Maximum 24 characters allowed)'
        if(passwordReg.length<8) newErrors.password ='password is too short (Minmium 8 characters allowed)'
        // food errors
        if (!passwordReg || passwordReg === '') newErrors.password = 'field cannot be blank!'
        return newErrors
    }
    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }
    const handleRegClose = () => {
        setAgree(false)
        setShowReg(false)
        setMessage(false)
    };
    const showMessage = () => {
        if (message) {
            return [
                <Card.Text><span style={{ color: 'red' }}>Sorry! Something went wrong. Please try again!</span></Card.Text>
            ]
        }
    }

     
    function validateForm() {
        return emailReg.length > 0 && passwordReg.length > 0 && agree;
    }
    const requestBody =
    {
        email: emailReg,
        password: passwordReg
    }
const sendNotification = () => {
    notify({ text: "Your account has been successfully created", variant: "success" });
  };
    const showSuccessMessage=()=>{
        if(showSignUp){
            return <Notification position="top"/>

        }
    }
    function handleSubmit(event) {
        event.preventDefault();
      const newErrors = findFormErrors()
        const signupRequest = {
            "email": emailReg,
            "password": passwordReg
        }
          if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setFormErrors(newErrors)
          }else{
        signup(signupRequest)
            .then(response => {
                setShowSignUp(true);
                setShowReg(false);
                 setAgree(false)
                 sendNotification();
            }).catch(error => {
                setMessage(true);
            });
      }
    }


         
    return (

        <div>
            {showSuccessMessage()}
            <Button variant="outline-success" onClick={handleRegShow}>Sign up</Button>


            <Modal show={showReg} onHide={handleRegClose} animation={false} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control isInvalid={!!formErrors.email} type="email" placeholder="Enter email" value={emailReg}
                                onChange={(e) => setEmailReg(e.target.value)} />
                                   <Form.Control.Feedback type='invalid'>
                                    {formErrors.email}
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control isInvalid={!!formErrors.password} type="password" placeholder="Password" value={passwordReg}
                                onChange={(e) => setPasswordReg(e.target.value)} />
                                <Form.Control.Feedback type='invalid'>
                                    {formErrors.password}
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer centered="true" className="card">
                    <Card  border="light">
                        {showMessage()}
                        <Button variant="primary" onClick={handleSubmit} disabled={!validateForm()} >
                            Sign up
                        </Button>
                        <Card.Body>
                            <Card.Text>
                                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                I agree to
                                <Card.Link href="/term"> Terms and Conditions </Card.Link>
                                <Card.Text></Card.Text>
                                <Card.Link href="/agreement"> Privacy Policy</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Footer>
            </Modal>
        </div >
    )
    
}
export default Login;