import React, { useState, Component, Select, useEffect, useCallback, Form } from 'react';

const Home = () => {
    const [coinTypes, setCoinTypes] = useState([]);
    const [coinID, setCoinID] = useState();

    const coinOptions = (f) => {
        return [{ title: "- select -", id: "" }, ...coinTypes].map((coinType) => {
            return {
                label: coinType.name,
                value: coinType.id.toString()
            }
        })
    };
    const fetchCoinList = () => {
        fetch('https://6043fea2a20ace001728e9b7.mockapi.io/api/v1/coinlist/conlist', { credentials: 'include' })
            .then(res => res.json()
                .then(
                    (result) => {
                        setCoinTypes(result);
                    }
                )
            )
    }
    useEffect(() => {
        fetchCoinList();
    }, []);
    const handleCoinChange = useCallback((coin_id) => {
        setCoinID(coin_id);
    }, []);
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <text>I want to choose</text>
                        <Select
                            label="Template"
                            options={coinOptions(coinTypes)}
                            onChange={handleCoinChange}
                            value={coinID}
                        />
                    </Form>

                </div>
            </container>
        </div>
    )
}
export default Home;