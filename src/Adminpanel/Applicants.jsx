import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { IoLocationOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { CiClock2 } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import { BsBriefcase } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";



const Applicants = () => {
    return (
        <div>
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
                                        <h6>Applicant</h6>
                                        <Col lg={2} xs={10}>
                                            <Form.Select className="input-select" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select></Col>
                                        <Col lg={2} xs={10}>
                                            <Form.Select className="input-select" aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select></Col>
                                    </div>
                                    <Row text-align="center">
                                        <Col lg={12} sm={8} md={8} xs={12}>
                                            <Card className='table-head'>
                                                <Row>
                                                    <Col lg={6}>
                                                        <p>Senior Product Designer</p>
                                                    </Col>
                                                    <Col lg={2}>
                                                        <button className='total-btn'>Total(s): 6</button>
                                                    </Col>
                                                    <Col lg={2}>
                                                        <p>Approved: 2</p>
                                                    </Col>
                                                    <Col lg={2}>
                                                        <p>Rejected(s): 4</p>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-1.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Darlene Robertson</h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Ui Designer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-2.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Wade Warren</h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Ui Designer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-3.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Leslie Alexander</h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Digital marketer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-4.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Floyd Miles</h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Front-end Developer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-5.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Cameron Williamson                                                    </h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Backend Developer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} md={12}>
                                            <div class="card flex-row"><img class="card-img-candidate" src="candidate-6.webp" />
                                                <div class="card-body">
                                                    <h4 class="card-title h5">Robert Fox</h4>
                                                    <p class="card-text">
                                                        <span style={{ color: "blue" }}>Software Engineer</span>
                                                        <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                        <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill ">App</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Design</button>{' '}
                                                    <button className='corner-round-btn2' variant="secondary rounded-pill">Digital</button>{' '}
                                                    <p className="tool-tip">
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <TiTick />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top" > <RxCrossCircled />
                                                        </Button>
                                                        <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                            data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line />
                                                        </Button>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>

                            </div>
                        </div>
                        <p style={{ textAlign: "center", marginTop: "4rem", marginBottom: "5rem" }}>© 2023 Superio by ib-themes. All Right Reserved.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Applicants;