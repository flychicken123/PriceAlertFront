import React, { useState, Component, Select, useEffect, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Container } from 'react-bootstrap';

export default function Home(props) {
    const [coinTypes, setCoinTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(props ? props.match?.params?.template_id : null);



    const coinOptions = (f) => {
        console.log("iam here")
        return [{ title: "- select -", id: "" }, ...coinTypes].map((coinType) => {
            console.log("cointype" + coinTypes);
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
        fetch('https://6043fea2a20ace001728e9b7.mockapi.io/api/v1/coinlist/coinlist')
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
            <Container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <p>I want to choose</p>
                        <AsyncSelect
                            defaultValue={selectedOption}
                            onChange={handleCoinChange}
                            value={ }
                            options={coinOptions(coinTypes)} />
                    </Form>

                </div>
            </Container>
        </div>
    )
}
