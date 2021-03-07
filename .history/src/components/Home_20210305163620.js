import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <div className='mainControl'>
            <container>
                <Row>
                    <Col />
                    <Col>
                        <Card style={{ marginTop: 50, marginBottom: 50 }}>
                            <Card.Body><h2>Price Alert</h2></Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>


            </container>
        </div>
    )
}
export default Home;