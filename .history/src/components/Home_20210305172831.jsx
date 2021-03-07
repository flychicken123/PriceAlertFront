import React, { Component } from 'react';
import { Form, MenuItem, Card, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <div className='mainControl'>
            <container>
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
                                <MenuItem href="#books">Books</MenuItem>
                                <MenuItem href="#podcasts">Podcasts</MenuItem>
                                <MenuItem href="#">Tech I Like</MenuItem>
                                <MenuItem href="#">About me</MenuItem>
                                <MenuItem href="#addBlog">Add a Blog</MenuItem>
                            </DropdownButton>
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;