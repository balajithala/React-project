import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Post = () => {
    return (
        <div>

            <Container>

                <Row>
                    <Col lg={2}></Col>
                    <Col lg={10}>
                        <h4 style={{ marginLeft: "20px", marginTop: "10px" }}>Post a New Job!</h4>
                        <p style={{ marginLeft: "20px", marginTop: "10px" }}>Ready to jump back in?</p>
                        <Card>
                            <Card.Title><h5 className="network-head">Post Job</h5></Card.Title>
                            <Row>
                                <Col lg={4} md={10} sm={10}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3> Job Detail</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={10} sm={10}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} md={10} sm={10}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="icon-pencil primary font-large-2 float-left"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>278</h3>
                                                        <span>New Posts</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={11} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "25px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="email" placeholder="Title" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={11} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px", paddingTop: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>About Company </Form.Label>
                                    <Form.Control as="textarea" rows={12} placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street.
                                            Managed a small team buying and selling Pogo sticks for farmers.
                                            Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. 
                                            Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development 
                                            team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and 
                                            management challenges"  className="input-label" />
                                </Form.Group></Col>
                                <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Linkedin</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={5} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Linkedin</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Specialisms</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Job Type</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Offered Salary</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Career Level</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Experience</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>SelectGender</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>Industry</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={5} sm={12} md={8} xs={11}>
                                    <Form.Label style={{ paddingLeft: "15px", marginTop: "12px" }}>City</Form.Label>
                                    <Form.Select className="select-label" aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>
                                <Col lg={10} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>Complete History</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={4} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label> Google Plus</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={3} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label> Google Plus</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Col lg={3} sm={12} md={8}><Form.Group className="mb-3" style={{ paddingLeft: "20px" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label> Google Plus</Form.Label>
                                    <Form.Control type="email" placeholder="06.04.2020" className="input-label" />
                                </Form.Group></Col>
                                <Button variant="outline-primary" style={{ width: "18%", marginLeft: "50px", height: "45px", marginTop: "20px", marginBottom: "40px" }}>Search Location</Button>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251707!3d11.014126297388282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719493695202!5m2!1sen!2sin" width="400" height="400" style={{ margin: "0 auto" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <Button className="" style={{ width: "19%", marginLeft: "50px", height: "45px", marginTop: "20px", marginBottom: "40px" }}>Search Location</Button>

                            </Row>
                        </Card>
                    </Col>
                    <p style={{ textAlign: "center", marginTop: "50px" }}>© 2023 Superio by ib-themes. All Right Reserved.</p>

                </Row>
            </Container>
        </div>
    )
}

export default Post;