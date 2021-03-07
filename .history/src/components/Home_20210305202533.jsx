import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group colcontrolId="formBasicEmail">
                            <text>I want to choose</text>
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;