import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>
                        <Form.Group colcontrolId="formBasicEmail">
                            <text>I want to choose</text>
                            <select defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                            >
                                <option value="Orange">Orange</option>
                                <option value="Radish">Radish</option>
                                <option value="Cherry">Cherry</option>
                            </select>
                        </Form.Group>
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;