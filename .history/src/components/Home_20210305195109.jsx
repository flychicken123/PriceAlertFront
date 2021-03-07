import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
    return (
        <div className='mainControl'>
            <Container fixed>
                <h2>Price Alert</h2>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />

            </Container>
        </div>
    )
}
export default Home;