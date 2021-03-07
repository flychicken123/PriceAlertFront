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
                            <Card.Body>Card at the middle of the screen using react-bootstrap</Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
                <h2>Price Alert</h2>

            </container>
        </div>
    )
}
export default Home;