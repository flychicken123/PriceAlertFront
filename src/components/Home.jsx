import React, { useState, Component, useEffect, useCallback, componentDidMount } from 'react';
import Select, { createFilter } from 'react-windowed-select';
import { Form, Navbar, Nav, NavDropdown, Container, Col, Button, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { ACCESS_TOKEN, API_BASE_URL,Back_API_URL, Email } from '../constants/const.jsx';
import ReactLoading from 'react-loading';
import '../css/Home.css';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
export default function Home(props) {

    const [coinTypes, setCoinTypes] = useState("");
    const [selectedCoin, setSelectedCoin] = useState("");
    const [selectedMethod, setSelectedMethod] = useState("");
    const [selectedExchange, setSelectedExchange] = useState("");
    const [price, setPrice] = useState("");
    const [email, setEmail] = useState("");
    const [webhook, setWebhook] = useState("")
    const [errors, setErrors] = useState("");
    const [coinOptions, setCoinOptions] = useState([]);
    const [methodOptions, setMethodOptions] = useState([]);
    const [exchangeOptions, setExchangeOptions] = useState([]);
    const [showExchange, setShowExchange] = useState(true);
    const [submitSuccess, setSubmitSuccess] = useState(true);
    const [formErrors, setFormErrors] = useState({})
    const [showPercent, setShowPercent] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendingMethod, setSendingMethod] = useState("");
    const apiUrl = 'https://pricealertback.azurewebsites.net/'
    const handleClose = () => {
        setSubmitSuccess(true)
        setShow(false)
    };
    const findFormErrors = () => {

        const newErrors = {}
        // name errors
        if (!selectedCoin || selectedCoin === '') newErrors.coin = 'select cannot be blank!'
        // food errors
        if (!price || price === '') newErrors.price = 'field cannot be blank!'
        // rating errors
        if (!sendingMethod || sendingMethod === '')
            newErrors.sendingMethod = 'please select a method'
        else {
            if ((!email || email === '') && (!webhook || webhook === '')) {
                if (sendingMethod.value === 'Email') {
                    newErrors.email = 'field cannot be blank'
                } else {
                    newErrors.webhook = 'field cannot be blank'
                }
            }
        }
        if (!selectedMethod || selectedMethod === '') newErrors.selectedMethod = 'select cannot be blank'
        if ((!selectedExchange || selectedExchange === '') && showExchange) newErrors.selectedExchange = 'select cannot be blank'
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            localStorage.clear();
            // newErrors.login = 'please login before submit'
            // newErrors.login = <div><p>please login before submit. If you don't have account, you can </p><SignUp /></div>
        }
        return newErrors
    }
    const loadingPic = () => (
        <ReactLoading type={"spin"} color={"white"} height={50} width={50} />
    );
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
    const changeMethod = () => {
        if (showPercent) {
            return [<Col xs="auto"><Form.Text className="normalText">on</Form.Text></Col>,
            <Col xs="auto"> <Form.Control className="smaller-input" htmlSize="10" size="sm" type="text" placeholder="0.0-100.0" onChange={handlePriceChange} />
                <Form.Control.Feedback type='invalid'>
                    {formErrors.price}
                </Form.Control.Feedback></Col>,
            <Col xs="auto"><Form.Text className="normalText">percent(%)</Form.Text></Col>
            ]
        } else {
            return [<Col xs="auto"><Form.Text className="normalText">of price</Form.Text></Col>,
            <Col className='price-col' xs="auto"> <Form.Control isInvalid={!!formErrors.price} className="smaller-input" htmlSize="10" size="sm" type="text" placeholder="price number" onChange={handlePriceChange} />
                <Form.Control.Feedback type='invalid'>
                    {formErrors.price}
                </Form.Control.Feedback></Col>,
            <Col xs="auto"><Form.Text className="normalText">USD</Form.Text></Col>]
        }
    }
    const sendingMethodContent = (sendingMethod) => {
        if (sendingMethod.value === "Discord") {
            console.log(sendingMethod.value)
            return ([<Form.Control isInvalid={!!formErrors.webhook} className="smaller-input" htmlSize="50" size="sm" type="text" placeholder="Your discord webhooks url" onChange={handleDiscordChange} />,
            <Form.Control.Feedback type='invalid'>
                {formErrors.webhook}
            </Form.Control.Feedback>]
            )
        } else if (sendingMethod.value === "Email") {

            return (
                [<Form.Control isInvalid={!!formErrors.email} className="smaller-input" htmlSize="50" size="sm" type="text" placeholder="Your email address" onChange={handleEmailChange} />,
                <Form.Control.Feedback type='invalid'>
                    {formErrors.email}
                </Form.Control.Feedback>]
            )

        } else {
            console.log("it's not possible")
        }
    }
    const arbitrage = () => {
        if (showExchange) {
            return (
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
                        {!!formErrors.selectedExchange && (
                            <div>
                                <span className="text-danger" style={{ fontSize: 15 }}>{formErrors.selectedExchange}</span>
                            </div>
                        )}
                    </Col>
                    <Col xs="auto"><Form.Text className="normalText">with</Form.Text></Col>
                    <Col xs="auto">
                        <Select styles={customStyles} value={sendingMethod} onChange={handleSendingMethodChange} options={options} theme={theme => ({
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
                        })} />

                        {!!formErrors.sendingMethod && (
                            <div>
                                <span className="text-danger" style={{ fontSize: 15 }}>{formErrors.sendingMethod}</span>
                            </div>
                        )}
                    </Col>
                </Form.Row>
            )
        } else {
            return (<div><Form.Row><span>(arbitrage is the process of capitalizing on the low correlation
            </span></Form.Row><span>in the prices of crypto assets across two or more exchanges)</span></div >)
        }

    }
    const handleCoinChange = useCallback((coin_id) => {
        setSelectedCoin(coin_id);
        if (!!formErrors.coin)
            formErrors.coin = ''
    });
    const handleExchangeChange = useCallback((exchange_id) => {
        setSelectedExchange(exchange_id);
        if (!!formErrors.selectedExchange)
            formErrors.selectedExchange = ''
    })

    const handleSendingMethodChange = useCallback((sendingMethod) => {
        setSendingMethod(sendingMethod);
        if (!!formErrors.sendingMethod)
            formErrors.sendingMethod = ''
    })
    const handleMethodChange = useCallback((method_id) => {
        setSelectedMethod(method_id);
        setShowPercent(method_id.method === 'trailing stop buy' || method_id.method === 'trailing stop sell' || method_id.method === 'arbitrage');
        if (method_id.method === 'arbitrage')
            setShowExchange(false);
        else
            setShowExchange(true);
        if (!!formErrors.selectedMethod)
            formErrors.selectedMethod = ''
    })
    const handlePriceChange = (event) => {
        event.preventDefault();
        setPrice(event.target.value);
        if (!!formErrors.price)
            formErrors.price = ''
    }
    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
        if (!!formErrors.email)
            formErrors.email = ''
    }
    const handleDiscordChange = (event) => {
        event.preventDefault();
        setWebhook(event.target.value);
        if (!!formErrors.webhook)
            formErrors.webhook = ''
    }
    const requestBody =
    {
        coinType: selectedCoin.name,
        method: selectedMethod.method,
        price: price,
        exchange: selectedExchange.id,
        email: email,
        sendingMethod: sendingMethod.value,
        discord: webhook
    }
    const requestBodyPercent =
    {
        coinType: selectedCoin.name,
        method: selectedMethod.method,
        percent: price,
        exchange: selectedExchange.id,
        email: email,
        sendingMethod: sendingMethod.value,
        discord: webhook
    }
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => setLoad(false), 500);
    //     setLoad(true);
    //     return () => clearTimeout(timeoutId);
    // }, [inputValue]);
    const response = () => {
        fetch(apiUrl + "api/v1/price/coinslist").then(res => res.json()).then(
            (result) => {
                setCoinOptions(result);
            }
        )
        fetch(apiUrl + 'api/v1/price/method').then(res => res.json()).then(
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

    const options = [
        { value: 'Email', label: 'Email' },
        { value: 'Discord', label: 'Discord' }

    ]

    const handleSubmit = useCallback(() => {
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setFormErrors(newErrors)
        } else if (localStorage.getItem(ACCESS_TOKEN)) {

            const headers = new Headers({
                'Content-Type': 'application/json',
            })
            headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
            setLoading(true);
            if (showPercent) {
                fetch(
                    API_BASE_URL + '/api/form/submit',
                    {
                        method: 'POST',
                        body: JSON.stringify(requestBodyPercent),
                        url: API_BASE_URL,
                        headers: headers,

                    }).then(response => {
                        setLoading(false);
                        if (response.ok) {
                            setShow(true);
                            setSubmitSuccess(true);
                            return response;
                        }
                        else {
                            setSubmitSuccess(false)
                        }
                    }).catch(error => {
                        setErrors(error)
                    });
            } else {
                fetch(
                    API_BASE_URL + '/api/form/submit',
                    {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        url: API_BASE_URL,
                        headers: headers,

                    }).then(response => {
                        setLoading(false);
                        if (response.ok) {
                            setShow(true);
                            setSubmitSuccess(true);
                            return response;
                        }
                        else {
                            setSubmitSuccess(false)
                        }
                    }).catch(error => {
                        localStorage.setItem(ACCESS_TOKEN, "");
                        setErrors(error)
                    });
            }
        } else {
            setLoading(true);
            if (showPercent) {
                fetch(
                    Back_API_URL + '/api/v1/price/submit',
                    {
                        method: 'POST',
                        body: JSON.stringify(requestBodyPercent),
                        url: API_BASE_URL,
                        headers: { 'Content-Type': 'application/json' },

                    }).then(response => {
                        setLoading(false);
                        if (response.ok) {
                            setShow(true);
                            setSubmitSuccess(true);
                            return response;
                        }
                        else {
                            setSubmitSuccess(false)
                        }
                    }).catch(error => {
                        setErrors(error)
                    });
            } else {
                fetch(
                    Back_API_URL + '/api/v1/price/submit',
                    {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        url: API_BASE_URL,
                        headers: { 'Content-Type': 'application/json' },

                    }).then(response => {
                        setLoading(false);
                        if (response.ok) {
                            setShow(true);
                            setSubmitSuccess(true);
                            return response;
                        }
                        else {
                            setSubmitSuccess(false)
                        }
                    }).catch(error => {
                        localStorage.setItem(ACCESS_TOKEN, "");
                        setErrors(error)
                    });
            }
        }

    })

    return (

        < div className='mainControl' >
            <Helmet>
                <style>{'body { background-color: #434c5f;text-align: center; padding: 20px;color: white; }'}</style>
            </Helmet>
            <Container fluid="md" className='container-wrapper'>

                <div className="main-container">

                    <Form className="form">
                        <h1>Price Alert</h1>

                        <Form.Row className="row-space">

                            <Col lg="auto" ><Form.Text className="normalText">send me alert when</Form.Text></Col>
                            <Col md="auto" className="typer">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    id="validationCustom04"
                                    required
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
                                {!!formErrors.coin && (
                                    <div>
                                        <span className="text-danger" style={{ fontSize: 15 }} >{formErrors.coin}</span>
                                    </div>
                                )}
                            </Col>
                            <Col xs="auto"><Form.Text className="normalText">price</Form.Text></Col>

                        </Form.Row>

                        <Form.Row className="row-space" >
                            <Col xs="auto">
                                <Select
                                    cacheOptions
                                    defaultOptions
                                    isInvalid={!!formErrors.selectedMethod}
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
                                {!!formErrors.selectedMethod && (
                                    <div>
                                        <span className="text-danger" style={{ fontSize: 15 }}>{formErrors.selectedMethod}</span>
                                    </div>
                                )}
                            </Col>
                            {
                                changeMethod()
                            }
                        </Form.Row>
                        {arbitrage()}
                        <Form.Row className="row-space">
                            <Col xs="auto">
                                {sendingMethodContent(sendingMethod)}
                            </Col>
                        </Form.Row>
                        <div>
                            <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
                            <div>{formErrors.login ? <span style={{ color: 'red' }}>{formErrors.login}</span> : ""}</div>
                        </div>
                        <div style={{ position: "relative", top: "10px", left: '200px' }}>{loading ? loadingPic() : ''}</div>
                        <Modal className="my-modal" show={!submitSuccess} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Fail Submit Alert</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>There was an issue during submit.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal className="my-modal" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Success Submit Alert</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, your alert has been success setup. You should get an email of it. If you don't get, please check your junk mailbox</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </div>
            </Container>
        </div >
    )
}
