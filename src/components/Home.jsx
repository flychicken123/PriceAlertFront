import React, { useState, Component, useEffect, useCallback, componentDidMount } from 'react';
import AsyncSelect from 'react-select/async';
import Select, { createFilter } from 'react-windowed-select';
import { Form, Container, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Popup from 'reactjs-popup';
import '../css/Home.css';
export default function Home(props) {

    const [coinTypes, setCoinTypes] = useState("");
    const [selectedCoin, setSelectedCoin] = useState("");
    const [selectedMethod, setSelectedMethod] = useState("");
    const [selectedExchange, setSelectedExchange] = useState("");
    const [price, setPrice] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");
    const [coinOptions, setCoinOptions] = useState([]);
    const [methodOptions, setMethodOptions] = useState([]);
    const [exchangeOptions, setExchangeOptions] = useState([]);


    const customStyles = {
        control: base => ({
            ...base,
            height: 34,
            minHeight: 27,
            maxHeight: 34,
            width: 140,
            textAlign: "50",
            fontSize: 14,
        }),
        theme: theme => ({
            ...theme.colors,
            primary25: 'black',
            primary: 'black',
        }),
        // dropdownIndicator: base => ({
        //     ...base,
        //     display: "none"
        // }),
        indicatorSeparator: base => ({
            ...base,
            display: "none"
        }),
        valueContainer: base => ({
            ...base,
            bottom: 5,
            paddingLeft: 20,
        })
    };

    const handleCoinChange = useCallback((coin_id) => {
        setSelectedCoin(coin_id);
        console.log(coin_id.name);
    }, []);
    const handleExchangeChange = useCallback((exchange_id) => {
        setSelectedExchange(exchange_id);
    })
    const handleMethodChange = useCallback((method_id) => {
        setSelectedMethod(method_id);
    })
    const handlePriceChange = (event) => {
        event.preventDefault();
        setPrice(event.target.value);
    }
    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }
    const requestBody =
    {
        coinType: selectedCoin.name,
        method: selectedMethod.method,
        price: price,
        exchange: selectedExchange.id,
        email: email
    }
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => setLoad(false), 500);
    //     setLoad(true);
    //     return () => clearTimeout(timeoutId);
    // }, [inputValue]);
    const response = () => {
        fetch(`http://localhost:5000/api/v1/price/coinslist`).then(res => res.json()).then(
            (result) => {
                setCoinOptions(result);
            }
        )
        fetch(`https://pricealertback.azurewebsites.net/api/v1/price/method`).then(res => res.json()).then(
            (result) => {
                setMethodOptions(result);
            }
        )
        fetch(`https://pricealertback.azurewebsites.net/api/v1/price/allExchanges`).then(res => res.json()).then(
            (result) => {
                setExchangeOptions(result);
            }
        )
    }
    useEffect(() => {
        response();
    }, [])


    const handleSubmit = useCallback(() => {
        console.log("price" + price);
        fetch(
            'https://pricealertback.azurewebsites.net/api/v1/price/submit',
            {
                method: 'POST',
                body: JSON.stringify(requestBody),
                url: 'https://pricealertback.azurewebsites.net/',
                headers: { 'Content-Type': 'application/json' },

            }).then(response => {
                return response;
            }).catch(error => {
                setErrors(error)
            });
    })
    const fetchCoinList = useCallback((input) => {

        if (input == "") {
            return fetch(`https://pricealertback.azurewebsites.net/api/v1/price/coinslist`).then(res => res.json());
        } else {
            return fetch(`https://pricealertback.azurewebsites.net/api/v1/price/coinslist/${input}`).then(res => res.json());
        }
    }
    )



    const fetchMethodList = () => {
        return fetch(`http://localhost:8080/api/v1/price/method`).then(res => res.json());

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

                        <Form.Row className="row-space">

                            <Col lg="auto" ><Form.Text className="normalText">send me alert when</Form.Text></Col>
                            <Col md="auto" className="typer">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    autocomplete
                                    name="color"
                                    options={coinOptions.slice(0, 300)}
                                    onChange={handleCoinChange}
                                    value={selectedCoin}
                                    getOptionValue={option => option.name}
                                    getOptionLabel={option => option.name}
                                    styles={customStyles}
                                    filterOption={createFilter({ ignoreAccents: false })}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#292d36',
                                            primary75: 'white',
                                            primary: '#292d36',
                                            neutral0: '#434c5f',
                                            neutral80: 'white',
                                            neutral90: 'white',
                                        },
                                    })}
                                />
                            </Col>
                            <Col xs="auto"><Form.Text className="normalText">price</Form.Text></Col>

                        </Form.Row>

                        <Form.Row className="row-space">
                            <Col xs="auto">
                                <Select
                                    cacheOptions
                                    defaultOptions
                                    onChange={handleMethodChange}
                                    value={selectedMethod}
                                    options={methodOptions}
                                    getOptionValue={option => option.method}
                                    getOptionLabel={option => option.method}
                                    styles={customStyles}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#292d36',
                                            primary75: 'white',
                                            primary: '#292d36',
                                            neutral0: '#434c5f',
                                            neutral80: 'white',
                                            neutral90: 'white',

                                        },
                                    })}
                                />
                            </Col>
                            <Col xs="auto"><Form.Text className="normalText">of price</Form.Text></Col>
                            <Col xs="auto"> <Form.Control className="smaller-input" htmlSize="10" size="sm" type="text" placeholder="price number" onChange={handlePriceChange} /></Col>
                            <Col xs="auto"><Form.Text className="normalText">USD</Form.Text></Col>
                        </Form.Row>
                        <Form.Row className="row-space">
                            <Col xs="auto"><Form.Text className="normalText">on</Form.Text></Col>
                            <Col xs="auto">

                                <Select
                                    cacheOptions
                                    defaultOptions
                                    onChange={handleExchangeChange}
                                    value={selectedExchange}
                                    options={exchangeOptions}
                                    getOptionValue={option => option.exchange}
                                    getOptionLabel={option => option.exchange}
                                    styles={customStyles}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#292d36',
                                            primary75: 'white',
                                            primary: '#292d36',
                                            neutral0: '#434c5f',
                                            neutral80: 'white',
                                            neutral90: 'white',

                                        },
                                    })}
                                />
                            </Col>
                            <Col xs="auto"><Form.Text className="normalText">with email</Form.Text></Col>


                        </Form.Row>
                        <Form.Row className="row-space">
                            <Col xs="auto"> <Form.Control className="smaller-input" htmlSize="50" size="sm" type="text" placeholder="Your email address" onChange={handleEmailChange} /></Col>
                        </Form.Row>
                        <Popup trigger={<Button variant="secondary" onClick={handleSubmit}>Submit</Button>}>
                            <div>Your alert has been setup! An email has been sent it to you, you might need to check your junk mailbox</div>
                        </Popup>

                    </Form>

                </div>
            </Container>
        </div >
    )
}
