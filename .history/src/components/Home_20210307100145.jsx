import React, { useState, Component, Select, useEffect, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Container, Col } from 'react-bootstrap';

export default function Home(props) {
    const [coinTypes, setCoinTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(props ? props.match?.params?.template_id : null);
    const customStyles = {
        control: base => ({
            ...base,
            height: 32,
            minHeight: 30,
            width: 110,
            padding: 0
        })
    };


    // const coinOptions = (f) => {
    //     return [{ name: "- select -", id: "" }, ...coinTypes].map((coinType) => {
    //         return {
    //             label: coinType.name,
    //             value: coinType.id
    //         }
    //     })
    // };
    const handleCoinChange = useCallback((coin_id) => {
        setSelectedOption(coin_id);
        console.log(coin_id.name);
    }, []);
    const fetchCoinList = () => {
        return fetch(`https://6043fea2a20ace001728e9b7.mockapi.io/api/v1/coinlist/coinlist`).then(res => res.json());
    }


    return (

        < div className='mainControl' >
            <Container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', backgroundColor: 'grey', width: '200' }}>

                    <Form>
                        <div style={{ justifyContent: 'center', height: '30vh' }}>
                            <h2>Price Alert</h2>
                        </div>
                        <Form.Row>
                            <Col>
                                I want to choose
                            </Col>
                            <Col>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    onChange={handleCoinChange}
                                    value={selectedOption}
                                    loadOptions={fetchCoinList}
                                    getOptionValue={option => option.id}
                                    getOptionLabel={option => option.name}
                                    styles={customStyles}
                                />
                            </Col>
                            <Col>asdfsdfsd  asdfdsaf</Col>
                        </Form.Row>

                    </Form>

                </div>
            </Container>
        </div >
    )
}
