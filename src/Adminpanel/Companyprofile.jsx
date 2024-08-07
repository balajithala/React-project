import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EmployersDashboard from "./EmployersDashboard";



const Companyprofile = () => {
    return (
        <div>
            <div>
                <Container fluid>

                    <Row>
                        <Col lg={2}><EmployersDashboard/></Col>
                        <Col lg={10} sm={8} md={8} xs={12}>
                            <div className="company-section" style={{paddingTop:"60px"}}>
                                <h4>Company Profile</h4>
                                <p style={{ marginLeft: "20px" }}>Ready to jump back in?</p>
                                <Row>
                                    <Col lg={11} md={12} sm={12}>
                                        <div class="card">
                                            <div class="card-content">
                                                <div class="card-body">
                                                    <div class="media d-flex">
                                                        <div class="align-self-center">
                                                            <i class="icon-pencil primary font-large-2 float-left"></i>
                                                        </div>
                                                        <div class="media-body text-right">
                                                            <h5>My Profile</h5>
                                                        </div>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <p><button type="file" className="profile-btn">Browse Logo</button>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
                                                        <p><button type="file" className="profile-btn">Browse Logo</button>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <card>
                                    <Row>
                                        {/* INPUT BOX SECTION */}
                                        <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Company name (optional)</Form.Label>
                                            <Form.Control type="email" placeholder="invisionn" className="input-label" />
                                        </Form.Group></Col>
                                        <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="ib-themes" className="input-label" />
                                        </Form.Group></Col>
                                        <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="email" placeholder="0 123 456 7890" className="input-label" />
                                        </Form.Group></Col>
                                        <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Website</Form.Label>
                                            <Form.Control type="email" placeholder="www.invision.com" className="input-label" />
                                        </Form.Group></Col>
                                        <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Est.since</Form.Label>
                                            <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                        </Form.Group></Col>
                                        {/* SELECT BOX SECTION */}

                                        <Col lg={5} sm={12} md={8} xs={11}>
                                            <Form.Label style={{ marginTop: "10px", paddingLeft: "20px" }}>Est.since</Form.Label>
                                            <Form.Select className="input-dropdown" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={5} sm={12} md={8} xs={11}>
                                            <Form.Label style={{ marginTop: "10px", paddingLeft: "20px" }}>Est.since</Form.Label>
                                            <Form.Select className="input-dropdown" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={5} sm={12} md={8} xs={11}>
                                            <Form.Label style={{ marginTop: "10px", paddingLeft: "20px" }}>Est.since</Form.Label>
                                            <Form.Select className="input-dropdown" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>

                                        <Col lg={11} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px", paddingTop: "50px" }} controlId="exampleForm.ControlInput1">
                                            <Form.Label>About Company </Form.Label>
                                            <Form.Control rows={12} placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street.
                                            Managed a small team buying and selling Pogo sticks for farmers.
                                            Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. 
                                            Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development 
                                            team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and 
                                            management challenges"  className="input-label" />
                                        </Form.Group></Col>
                                        <Button className="company-btn" style={{ width: "18%", marginLeft: "35px", height: "45px" }}>Save</Button>
                                    </Row></card> </div>
                            {/* NETWORK CARD INFORMATION */}
                            <Row>
                                <Col lg={12} sm={12} md={10}>
                                    <Card className="network-card">
                                        <Card.Title><h5 className="network-head">Social Network</h5></Card.Title>
                                        <Row>
                                            <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label>Facebook</Form.Label>
                                                <Form.Control type="email" placeholder="www.facebook.com/Invision" className="input-label" />
                                            </Form.Group></Col><Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label>Twitter</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label>Linkedin</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label> Google Plus</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Button style={{ width: "19%", marginLeft: "50px", height: "45px", marginTop: "20px", marginBottom: "40px" }}>Save</Button>
                                        </Row>
                                    </Card>

                                    {/* CONTACT INFORMATION SECTION */}
                                    <Card className="network-card">
                                        <Card.Title><h5 className="network-head">Contact Information</h5></Card.Title>
                                        <Row>
                                            <Col lg={5} sm={12} md={8} xs={11}>
                                                <Form.Label style={{ marginTop: "10px", paddingLeft: "20px" }}>Est.since</Form.Label>
                                                <Form.Select style={{ marginLeft: "20px", width: "94%" }} className="input-dropdown" aria-label="Default select example">
                                                    <option>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                            <Col lg={6} sm={12} md={8} xs={11}>
                                                <Form.Label style={{ marginTop: "10px", paddingLeft: "20px" }}>Est.since</Form.Label>
                                                <Form.Select style={{ marginLeft: "1px" }} className="input-dropdown" aria-label="Default select example">
                                                    <option>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={11} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label> Google Plus</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label> Google Plus</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Col lg={3} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label> Google Plus</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Col lg={3} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px", width: "100%" }} controlId="exampleForm.ControlInput1">
                                                <Form.Label> Google Plus</Form.Label>
                                                <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                            </Form.Group></Col>
                                            <Button variant="outline-primary" className="location-button" style={{ width: "20%", marginLeft: "50px", height: "45px", marginTop: "20px", marginBottom: "40px" }}>Search Location</Button>
                                        </Row>

                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251707!3d11.014126297388282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719493695202!5m2!1sen!2sin" width="400" height="400" style={{ margin: "0 auto" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                        {/* <Button style={{ width: "18%", marginLeft: "50px", height: "45px",marginTop:"20px",marginBottom:"40px" }}>Search Location</Button>  */}

                                    </Card>
                                </Col>
                                <p style={{ textAlign: "center", marginTop: "50px" }}>© 2023 Superio by ib-themes. All Right Reserved.</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Companyprofile;