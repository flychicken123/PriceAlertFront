import React, { Component } from 'react';
import { Form, Card, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <div className='mainControl'>
            <container>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;