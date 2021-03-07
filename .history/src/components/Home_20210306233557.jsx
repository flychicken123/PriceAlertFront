import React, { useState, Component, Select, useEffect, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { Form } from 'react-bootstrap';
state = {
    selectedCoinOption: null,
};
export default function Home(props) {
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

    handleCoinChange = selectedCoinOption => {
        this.setState(
            { selectedCoinOption },
            () => console.log(`Option selected:`, this.state.selectedCoinOption)
        );
    };
    const { selectedCoinOption } = this.state;
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

    const { defaultOptions, placeholder, inputId } = this.props;
    return (
        <div className='mainControl' >
            <container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', backgroundColor: 'grey', width: '100' }}>
                    <Form>
                        <h2>Price Alert</h2>

                        <text>I want to choose</text>
                        <AsyncSelect
                            cacheOptions
                            value={selectedCoinOption}
                            defaultOptions
                            options={coinOptions} />
                    </Form>

                </div>
            </container>
        </div>
    )
}
