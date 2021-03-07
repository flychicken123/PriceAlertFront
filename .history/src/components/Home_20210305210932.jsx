import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col, Select } from 'react-bootstrap';

const Home = () => {
    handleSelect = function (e) {
        this.setState({
            selectedValue: e.target.value
        });
    }
    handleSubmit = function (e) {
        e.preventDefault();
        //submit form using AJAX POST
        //select value in this.state.selectedValue
        //$.ajax()
    }
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <text>I want to choose</text>
                        <Form.Control as="select" size="sm" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <text>I want to chooasdfddddddddddddddddddddddddse</text>

                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;