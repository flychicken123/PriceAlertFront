import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='mainControl'>
            <container>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group as={Col} md="4" colcontrolId="formBasicEmail">
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;