import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import { Button, Container } from '@material-ui/core';

const Home = () => {
    return (
        <div className='mainControl'>
            <Container fixed>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="coinType">
                            <Form.Label>Coin Type</Form.Label>
                            <DropdownButton title="Dropdown">
                                <Dropdown.Item>Books</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    </Form>

                </div>
            </Container>
        </div>
    )
}
export default Home;