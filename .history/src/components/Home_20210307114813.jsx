import React, { useState, Component, Select, useEffect, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Container, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../css/Home.css';
export default function Home(props) {

    const [coinTypes, setCoinTypes] = useState([]);
    const [selectedOption, setSelectedOption] = useState(props ? props.match?.params?.template_id : null);
    const customStyles = {
        control: base => ({
            ...base,
            height: 25,
            width: 115,
            fontSize: 14,
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
            <Helmet>
                <style>{'body { background-color: #434c5f;text-align: center; padding: 20px;color: white; }'}</style>
            </Helmet>
            <Container fluid="md">

                <div style={{ display: 'flex', justifyContent: 'center', height: '50vh', backgroundColor: '#434c5f', width: '200' }}>

                    <Form>
                        <h1>Price Alert</h1>

                        <Form.Row>

                            <Col xs={8} md={6} lg={4}>send me alert when</Col>
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
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#191f2b',
                                            primary: '#515c73f',
                                            neutral0: '434c5f',
                                            neutral80: 'white'

                                        },
                                    })}
                                />
                            </Col>
                            <Col>price</Col>

                        </Form.Row>
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
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#191f2b',
                                        primary: '#515c73f',
                                        neutral0: '434c5f',
                                        neutral80: 'white'

                                    },
                                })}
                            />
                        </Col>
                        <Form.Row>
                        </Form.Row>
                    </Form>

                </div>
            </Container>
        </div >
    )
}
