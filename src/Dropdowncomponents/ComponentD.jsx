import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ComponentD = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-7.webp"
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
                    {/*  */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-8.webp"
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
                    {/*  */}
                    <Col xs={12} sm={10} md={6} lg={4}>
                        <Card className='card-section' style={{ marginTop: "30px" }} >
                            <Card.Img variant="top" src="/Candidateimages/candidate-9.webp"
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
                </Row>
            </Container>
        </div>
    )
}

export default ComponentD;