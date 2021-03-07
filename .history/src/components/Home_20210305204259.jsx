import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col, Select } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group colcontrolId="formBasicEmail">
                            <text>I want to choose</text>
                            <Form.Control as="select" size="sm" custom>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <text>I want to chooasdfddddddddddddddddddddddddse</text>
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;