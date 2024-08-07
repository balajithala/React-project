import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';



const Managesection = () => {
    return (
        <div>
            <div className="manage-section">
                <Container>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={10} md={8} sm={8} xs={12}>
                            <h3>Manage Jobs!</h3>
                            <p>Ready to jump back in?</p>
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <h5>My Job Listings</h5>
                                            <Form.Select className="input-select" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                                <Row text-align="center">
                                    <Col lg={12} sm={8} md={8} xs={12}>
                                        <Card className='table-head'>
                                            <Row>
                                                <Col lg={4}>
                                                    <p>Title</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Applications</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Created & Expired</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Status</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Action</p>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td><p><img class="card-img-right example-card-img-responsive" src="1-1.webp" />
                                                        Software Engineer (Android), Libraries<br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                    <td><ul className='applied-head'>
                                                        <li><a href="">3+ Applied</a></li>
                                                    </ul></td>
                                                    <td> <p className='col-text'>October 27, 2017<br></br>
                                                        April 25, 2011</p></td>
                                                    <td><p className='col-active'>Active</p></td>

                                                    <td><p><img class="card-img-right example-card-img-responsive" />
                                                        Software Engineer <br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                </tr>
                                            </tbody></Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td><p><img class="card-img-right example-card-img-responsive" src="1-2.webp" />
                                                        Software Engineer (Android), Libraries<br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                    <td><ul className='applied-head'>
                                                        <li><a href="">3+ Applied</a></li>
                                                    </ul></td>
                                                    <td> <p className='col-text'>October 27, 2017<br></br>
                                                        April 25, 2011</p></td>
                                                    <td><p className='col-active'>Active</p></td>

                                                    <td><p><img class="card-img-right example-card-img-responsive" />
                                                        Software Engineer <br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                </tr>
                                            </tbody></Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td><p><img class="card-img-right example-card-img-responsive" src="1-3.webp" />
                                                        Software Engineer (Android), Libraries<br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                    <td><ul className='applied-head'>
                                                        <li><a href="">3+ Applied</a></li>
                                                    </ul></td>
                                                    <td> <p className='col-text'>October 27, 2017<br></br>
                                                        April 25, 2011</p></td>
                                                    <td><p className='col-active'>Active</p></td>

                                                    <td><p><img class="card-img-right example-card-img-responsive" />
                                                        Software Engineer <br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                </tr>
                                            </tbody></Table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td><p><img class="card-img-right example-card-img-responsive" src="1-4.webp" />
                                                        Software Engineer (Android), Libraries<br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                    <td><ul className='applied-head'>
                                                        <li><a href="">3+ Applied</a></li>
                                                    </ul></td>
                                                    <td> <p className='col-text'>October 27, 2017<br></br>
                                                        April 25, 2011</p></td>
                                                    <td><p className='col-active'>Active</p></td>

                                                    <td><p><img class="card-img-right example-card-img-responsive" />
                                                        Software Engineer <br></br>
                                                        <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span></p></td>
                                                </tr>
                                            </tbody></Table>
                                    </Col>
                                </Row>




                            </div>
                        </Col>
                        <p style={{ textAlign: "center", marginTop: "4rem", marginBottom: "5rem" }}>© 2023 Superio by ib-themes. All Right Reserved.</p>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Managesection;