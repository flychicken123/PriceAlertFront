import React, { useState, Component, AsyncSelect } from 'react';
import { Form, DropdownButton, Dropdown, Row, Col, Select } from 'react-bootstrap';

const Home = () => {
    const [coinType, setCoinType] = useState([]);
    const [coinList, setCoinList] = useState({});
    const handleCoinType = value => {
        setCoinType(value);
    };
    const fetchCoinList = () => {
        fetch('https://6043fea2a20ace001728e9b7.mockapi.io/api/v1/coinlist/conlist', { credentials: 'include' })
            .then(res => res.json())
            .then(
                (res) => {
                    setCoinList(res);
                }
            )
    }
    const loadOptions = (inputValue) => {

    }
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <text>I want to choose</text>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            value={coinType}
                            getOptionLabel={e => e.title}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions}
                            onInputChange={handleInputChange}
                            onChange={handleChange}
                        />
                        <text>I want to chooasdfddddddddddddddddddddddddse</text>

                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;