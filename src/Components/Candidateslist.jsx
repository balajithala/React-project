import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ComponentD from '../Dropdowncomponents/ComponentD';
import ComponentE from '../Dropdowncomponents/ComponentE';
import ComponentF from '../Dropdowncomponents/ComponentF';
import Footer from './Footer';
import Navbarcontent from './Navbarcontent';
const Candidateslist = () => {

    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    return (
        <div className="">
            <div>
                <Navbarcontent/>
                </div>

            <div className='candidate-form'>
                <Container>
                    <div className="Search-bar justify-content-center  pb-5 rounded-pill">
                        <div className="search-candidate-container justify-content-center">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <input type="text" className=" pt-4 pb-4 ps-4" placeholder="Search by" /></Col>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <input type="text" className=" pt-4 pb-4 ps-4" placeholder="location" /></Col>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <Form.Select aria-label="Default select example" className='pt-4 pb-4 ps-4' style={{ height: "65px", marginTop: "15px", border: "none" }}>
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>

                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <button className="search-employer d-flex justify-content-center align-items-center">
                                        Find jobs
                                    </button></Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs={12} sm={10} lg={12}>
                        <Col xs={8} sm={10} md={6} lg={12}>
                            <select value={selected} onChange={handleChange} className="Dropdown-control-sm" aria-label="select example" >
                                <option value="">Founded date</option>
                                <option value="first Component">First Component</option>
                                <option value="second Component">Second Component</option>
                                <option value="third Component">Third Component</option>
                            </select>

                            {/* Conditional rendering based on selected value */}
                            {selected === "first Component" && <ComponentD />}
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-1.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 2 CARD 2 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-2.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button' >View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 3 CARD 3 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-3.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 4 CARD 4 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }} className='card-section'>
                            <Card.Img variant="top" src="/Candidateimages/candidate-4.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 5 CARD 5 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-5.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 6 CARD 6 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-6.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button' >View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {selected === "second Component" && <ComponentE />}

                    {/* 7 CARD 7 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-1.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button' >View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 8 CARD 8 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-2.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button' >View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 9 CARD 9 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-3.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button' >View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 10 CARD 10 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-4.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 11 CARD 11 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-5.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 12 CARD 12 IMAGE */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card style={{ marginTop: "30px" }}>
                            <Card.Img variant="top" src="/Candidateimages/candidate-6.webp"
                                style={{ height: "130px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                            <Card.Body>
                                <Card.Title className='card-head'><p>Darlene Robertson</p></Card.Title>
                                <Card.Text><p style={{ color: "blue", textAlign: "center" }}>UI Designer</p></Card.Text>
                                <Card.Text className='candidate-card'><p style={{ textAlign: "center" }}><IoLocationOutline /> London,UK  <LiaMoneyBillWaveAltSolid />  $99 / hour </p></Card.Text>
                                <p style={{ textAlign: "center" }}>
                                    <Button style={{ height: "35px", padding: "5px", width: "15%" }} className='candidate-btn' variant="secondary rounded-pill ">App</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Design</Button>{' '}
                                    <Button style={{ height: "35px", padding: "5px", width: "19%" }} className='candidate-btn' variant="secondary rounded-pill ">Detail</Button>{' '}</p>
                                <button className='card-button'>View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {selected === "third Component" && <ComponentF />}

                </Row>
            </Container>
            <div className='candidate-footer'>
                <Footer/>
                </div>

        </div>
    )
}

export default Candidateslist