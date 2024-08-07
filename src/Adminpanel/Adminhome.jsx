import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { IoLocationOutline } from "react-icons/io5";
import { PiMoneyLight } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";

const Adminhome = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}></Col>
                <Col lg={9}>
                    <div className="sidebar-home">
                        <Row>
                            <Col lg={3} md={12} sm={12}>
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
                            <Col lg={3} md={12} sm={12}>
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
                            <Col lg={3} md={12} sm={12}>
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
                            <Col lg={3} md={12} sm={12}>
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
                            <Col lg={7} xs={12} sm={12}>
                                <Card className="home-chart">
                                    <p className="chart-text">Your Profile Views</p>
                                    <select class="form-select-sm" aria-label="select example">
                                        <option value="">All</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <Card.Img variant="top" src="download.png" />

                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className="home-chart">
                                    <Card.Body>
                                        <h5 className="chart-text">Notifications</h5>
                                        <Card.Text>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Henry Wilson applied for a job Product Designer</p></span>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Raul Costa applied for a job Product Manager, Risk</p></span>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Jack Milk applied for a job Technical Architect</p></span>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Michel Arianapplied for a job Software Engineer</p></span>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Wade Warren applied for a job Web Developer</p></span>
                                            <span><p className="chart-icon" style={{ paddingLeft: "30px", paddingBottom: "10px" }}><BsFillBriefcaseFill /> Michel Arianapplied for a job Software Engineer</p></span>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Col lg={12} md={10} sm={8} >

                            <Card className="img-card">
                                <Card.Body>
                                    <Card.Text>
                                        <p className="chart-text">Your Profile Views</p>
                                        <Row>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-1.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />

                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />

                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-2.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />

                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />

                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-3.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-4.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-5.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} sm={12} md={12}>
                                                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="candidate-6.webp" />
                                                    <div class="card-body">
                                                        <h4 class="card-title h5 h4-sm">Udemy</h4>
                                                        <p class="card-text">
                                                            <span style={{ color: "blue" }}>Ui Designer</span>
                                                            <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                            <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                                        <button className='corner-round-btn' variant="secondary rounded-pill ">App</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Design</button>{' '}
                                                        <button className='corner-round-btn' variant="secondary rounded-pill">Digital</button>{' '}
                                                        <p className="tool-tip">
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <MdOutlineRemoveRedEye className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <TiTick className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top" > <RxCrossCircled className="tip-logo" />
                                                            </Button>
                                                            <Button type="button" className="tip-btn" variant="outline-primary" data-toggle="tooltip"
                                                                data-placement="top" title="Tooltip on top"> <RiDeleteBin5Line className="tip-logo" />
                                                            </Button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
               </Col>
               </Row>
        </Container >
    )
}
export default Adminhome;
