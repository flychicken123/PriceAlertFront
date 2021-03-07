import React, { useState, Component, Select, useEffect, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { Form } from 'react-bootstrap';

export default function Home(props) {
    const [coinTypes, setCoinTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);



    const coinOptions = (f) => {
        return [{ title: "- select -", id: "" }, ...coinTypes].map((coinType) => {
            console.log(coinTypes);
            return {

                label: coinType.name,
                value: coinType.id.toString()
            }
        })
    };
    const handleCoinChange = useCallback((coin_id) => {
        setSelectedOption(coin_id);
    }, []);
    const fetchCoinList = () => {
        fetch('https://6043fea2a20ace001728e9b7.mockapi.io/api/v1/coinlist/coinlist', { credentials: 'include' })
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

    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <text>I want to choose</text>
                        <AsyncSelect
                            defaultValue={selectedOption}
                            onChange={handleCoinChange}
                            options={coinOptions} />
                    </Form>

                </div>
            </container>
        </div>
    )
}
