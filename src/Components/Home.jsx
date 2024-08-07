import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CgSearch } from "react-icons/cg";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { CiClock2 } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { Bs0CircleFill } from "react-icons/bs";
// ICONS
import { LiaBuyNLarge, LiaCoinsSolid } from "react-icons/lia";
import { TbSpeakerphone } from "react-icons/tb";
import { BsPencilSquare } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import Footer from './Footer';




const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Home">
            <div className="menu-section">
                <div className='nav-bar'>
                    <Navbar expand="lg" className="bg-body-tertiary=#">
                        <Container>
                            <img src="logo-2.svg" alt="myimage" className='home-logo' />
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Navbar.Toggle img src="menu (1).png" alt="" className='navbar-menu' onClick={handleShow} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="Home"><Nav.Link href="#home" id="nav-dropdown">Home</Nav.Link></Link>
                                    <Link to="Findjobs"><Nav.Link href="#link" id="basic-nav-dropdown">Find jobs</Nav.Link></Link>
                                    <div class="dropdown">
                                        <p className="dropdown-list">Employers</p>
                                        <div class="dropdown-content">
                                            <Link to="Employers"><a href="#">Employers List</a></Link>
                                            <Link to="EmployersDashboard"><a href="#">Employers Dashboard</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list">Candidates</p>
                                        <div class="dropdown-content">
                                            <Link to="Candidateslist"><a href="#">Candidates List</a></Link>
                                            <Link to="EmployersDashboard"><a href="#">Candidates Dashboard</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list">Blog</p>
                                        <div class="dropdown-content">
                                            <Link to="Blog"><a href="#">Blog</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list">Pages</p>
                                        <div class="dropdown-content">
                                            <Link to="Blog"><a href="#">Blog</a></Link>
                                            <Link to="Blog"><a href="#">Blog</a></Link>
                                            <Link to="Blog"><a href="#">Blog</a></Link>
                                        </div>
                                    </div>

                                </Nav>

                                <Link to="/LoginForm"><button className='login-btn'>Login / Register</button> </Link>
                                <button className='post-btn'>Job Post</button>{' '}
                            </Navbar.Collapse>


                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><p>kufvufvuyv<img src="logo-3.svg" alt="" srcset="myimage" className='home-img' style={{ width: "100%", height: "50px" }} /></p></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='offcanvas-body'>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Link to="Home"><Nav.Link href="#home" id="nav-dropdown">Home</Nav.Link></Link>
                                            <Link to="Findjobs"><Nav.Link href="#link" id="basic-nav-dropdown">Find jobs</Nav.Link></Link>
                                            <div class="dropdown">
                                                <p className="dropdown-list">Employers</p>
                                                <div class="dropdown-content">
                                                    <Link to="Employers"><a href="#">Employers List</a></Link>
                                                    <Link to="EmployersDashboard"><a href="#">Employers Dashboard</a></Link>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <p className="dropdown-list">Candidates</p>
                                                <div class="dropdown-content">
                                                    <Link to="Candidateslist"><a href="#">Candidates List</a></Link>
                                                    <Link to="EmployersDashboard"><a href="#">Candidates Dashboard</a></Link>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <p className="dropdown-list">Blog</p>
                                                <div class="dropdown-content">
                                                    <Link to="Blog"><a href="#">Blog</a></Link>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                                <p className="dropdown-list">Pages</p>
                                                <div class="dropdown-content">
                                                    <Link to="Blog"><a href="#">Blog</a></Link>
                                                    <Link to="Blog"><a href="#">Blog</a></Link>
                                                    <Link to="Blog"><a href="#">Blog</a></Link>
                                                </div>
                                            </div>

                                        </Nav>
                                        <button className='login-btn'>Login / Register</button>
                                        <button className='post-btn'>Job Post</button>{' '}
                                    </Navbar.Collapse>
                                    <p className='offcanvas-text'><p>Call US</p>
                                        <span style={{ fontSize: "20px", marginTop: "10px", marginBottom: "40px" }}>123 456 7890</span>
                                        <p>329 Queensberry Street, North Melbourne</p>
                                        <p> VIC</p>
                                        <p>3051, Australia.</p>
                                        <p>support@superio.com</p></p>
                                    <span className="social-icon">
                                        <TiSocialFacebook />
                                        <FaTwitter />
                                        <FaInstagram />
                                        <FaLinkedinIn />

                                    </span>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Container>

                    </Navbar>
                </div>

                <p className='banner-head'>The Easiest Way to Get Your New Job</p>
                <Container>
                    <div className="Search-bar justify-content-center pb-5 rounded-pill">
                        <div className="search-input-container justify-content-center">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <input type="text" className=" pt-4 pb-4 ps-4" placeholder="Search by" /></Col>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <input type="text" className=" pt-4 pb-4 ps-4" placeholder="location" /></Col>
                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <Form.Select aria-label="Default select example" className='pt-4 pb-4 ps-4' style={{ height: "65px", marginTop: "15px", border: "none" }}>
                                        <option > All Categories</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select></Col>

                                <Col xs={12} sm={12} md={12} lg={3}>
                                    <button className="search-containe d-flex justify-content-center align-items-center">
                                        Find jobs
                                    </button></Col>
                            </Row>

                        </div>
                        <p style={{ textAlign: "center", color: "#fff", paddingTop: "15px", fontWeight: "bold" }}> Popular Searches :    Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
                    </div>

                </Container>

            </div>

            {/*  */}
            <div className="Home-job">
                <h2 className="title-sec">Most Popular Jobs</h2>
                <p className="title-secb">Know your worth and find the job that qualify your life</p>
                <Container>
                    <Row>
                        <div className="tab-buttons">
                            <Button onClick={() => setActiveIndex(0)} className="tab-home-btn" rounded outlined={activeIndex !== 0} label="All" />
                            <Button onClick={() => setActiveIndex(1)} className="tab-home-btn" rounded outlined={activeIndex !== 1} label="Trending" />
                            <Button onClick={() => setActiveIndex(2)} className="tab-home-btn" rounded outlined={activeIndex !== 2} label="Design" />
                            <Button onClick={() => setActiveIndex(3)} className="tab-home-btn" rounded outlined={activeIndex !== 3} label="Marketing" />
                            <Button onClick={() => setActiveIndex(4)} className="tab-home-btn" rounded outlined={activeIndex !== 4} label="Health" />
                        </div>
                        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                            <TabPanel>
                                <Row>
                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"> <li><a><Link>Software Engineer (Android), Librariese</Link></a></li> </h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 2ND ROW 2ND CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-2.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Recruiting Coordinator</Link></a></li></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Catalyst</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'  >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 3rd ROW 3rd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-3.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Product Manager, Studio</Link></a></li> </h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Invision</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 4th ROW 4th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-4.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Product Designer</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Upwork</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 5th ROW 5th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-6.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Full Stack Engineer, Creator Success</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Medium</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 6th ROW 6th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Software Engineer (Android), Librariese</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Figma</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>

                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    {/* 1st ROW 1st CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Software Engineer (Android), Librariese</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 2nd ROW 2nd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-2.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Recruiting Coordinator</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Catalyst</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 3rd ROW 3rd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-3.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Product Manager, Studio</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Invision</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 4th ROW 4th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-5.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Web Developer</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Figma </span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>

                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    {/* 1st ROW 1st CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/6-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Product Designer</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Upwork</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 2nd ROW 2nd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/6-2.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Software Engineer</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 3rd ROW 3rd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/6-3.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Recruiting Coordinator</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Catalyst </span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 4th ROW 4th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/6-4.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Software Engineer</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Segment</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>

                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    {/* 1st ROW 1st CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Product Designer</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Upwork</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 2nd ROW 2nd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-2.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Product Manager, Studio</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Invision</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 3rd ROW 3rd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-3.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Product Manager, Risk</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase />Medium</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 4th ROW 4th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/1-4.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Product Designer</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Upwork</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>

                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    {/* 1st ROW 1st CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-1.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Web Developer</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Udemy</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 2nd ROW 2nd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-2.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior Product Designer</Link></a></li> <GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Twilio</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 3rd ROW 3rd CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-3.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Senior BI Analyst</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Figma</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge'>
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>
                                    {/* 4th ROW 4th CARD */}

                                    <Col xs={12} sm={6} md={10} lg={6}><div class="card flex-row">
                                        <img class="card-img-left example-card-img-responsive" src="/brandimages/2-5.webp" />
                                        <div class="card-body">
                                            <h4 class="card-title h5 h4-lg"><li><a><Link>Technical Architect</Link></a></li><GoBookmark /></h4>
                                            <p class="card-text">
                                                <span className='brief-icon'><BsBriefcase /> Liviley</span>
                                                <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                                <span className='clock-icon'><CiClock2 /> 11 hours ago</span>
                                                <span className='mon-icon'><PiMoneyLight />$35k-$$45k</span></p>
                                            <Stack direction="horizontal" gap={2} style={{marginTop:"10px"}}>
                                                <Badge pill="primary" className='badge' >
                                                    Part-time
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Private
                                                </Badge>
                                                <Badge pill bg="primary">
                                                    Urgent
                                                </Badge>
                                            </Stack>
                                        </div>
                                    </div></Col>

                                </Row>
                            </TabPanel>
                        </TabView>
                    </Row>
                </Container>
            </div>
            {/* HOME WORK SECTION */}
            <div className="Homework">
                <h1 className="work-head">How It Works?</h1>
                <p className="work-text">Job for anyone, anywhere</p>
                <div className='work-box'>
                    <Container>
                        <Row>

                            <Col xs={12} sm={6} lg={4} >
                                <img src="/Processimages/process-1.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Register an account to start</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <img src="/Processimages/process-2.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Explore over thousands of resumes</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <img src="/Processimages/process-1.webp" alt="" srcset="" className='reg-img' />
                                <p className='reg-text'>Find the most suitable candidate</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/*  TOP COMPANY REGISTERED SECTION*/}
            <div className="home-company">
                <h1 className="comp-head">Top Company Registered</h1>
                <p className="comp-text">Some of the companies we have helped recruit excellent applicants over the years.</p>
                <Container>
                    <Carousel className='carousel-box' data-bs-theme="">
                        <Carousel.Item>
                            {/* 1st Row 1st image */}
                            <Row>
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card text-align="center" className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-1.webp"
                                            style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>15 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-2.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>21 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-3.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>18 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 1st Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-4.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>17 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* 2nd Row 1st image */}
                            <Row>
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-1.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>15 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-2.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />

                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>12 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-3.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>23 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 2nd Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-4.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>15 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {/* 3rd Row 1st image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-1.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>19 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 2nd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-2.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>24 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 3rd image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row'>
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-3.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>28 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* 3rd Row 4th image */}
                                <Col sm={12} xs={12} md={6} lg={3}>
                                    <Card className='card-row' >
                                        <Card.Img variant="top" className='top-company-img' src="/Companyimages/company-4.webp" style={{ height: "100px", width: "30%", margin: "0 auto", paddingTop: "20px" }} />
                                        <Card.Body>
                                            <Card.Title className='card-head'>Udemy</Card.Title>
                                            <Card.Text className='card-content'><p><IoLocationOutline /> London,UK </p></Card.Text>
                                            <button className='card-home-btn'>15 open positions </button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>

            {/* POPULAR JOB CATEGORY */}
            <div className='home-popular'>
                <h1 className='pop-head'>Popular Job Categories</h1>
                <p text align="center">2020 jobs live - 293 added today.</p>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><LiaCoinsSolid className='job-logo' style={{ fontWeight: "normal" }} /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Accounting/Finance</h4>
                                    <p class="card-text">
                                        <span>(2 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><TbSpeakerphone className='job-logo' /> </span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg">Marketing</h4>
                                    <p class="card-text">
                                        <span>(86 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><BsPencilSquare className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg">Design</h4>
                                    <p class="card-text">
                                        <span>(43 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><FaLaptopCode className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Development</h4>
                                    <p class="card-text">
                                        <span>(12 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><TbReportSearch className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Human Resource</h4>
                                    <p class="card-text">
                                        <span>(55 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary"><span><IoRocketOutline className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Automotive Jobs</h4>
                                    <p class="card-text">
                                        <span>(2 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary"><span><LiaCoinsSolid className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Customer Service</h4>
                                    <p class="card-text">
                                        <span>(23 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><FaBriefcaseMedical className='job-logo' /></span></button>
                                <div class="card-body">
                                    <h4 class="card-title h5 h4-lg"> Health and Care</h4>
                                    <p class="card-text">
                                        <span>(25 open position)</span></p>
                                </div>
                            </div></Col>
                        <Col xs={12} sm={6} md={10} lg={4}>
                            <div class="card flex-row">
                                <button className='job-btn' variant="outline-primary" ><span><FaCarSide className='job-logo' style={{ fontWeight: "normal" }} /></span></button>
                                <div class="card-body">
                                    <h5 class="card-title"> Project Management</h5>
                                    <p class="card-text">
                                        <span>(92 open position)</span></p>
                                </div>
                            </div></Col>
                    </Row>
                </Container>
            </div>

            {/* RECENT NEWS ARTICLES */}

            <div className="home-news">
                <h1 className="artical-head">Recent News Articles</h1>
                <p className="artical-text">Fresh job related news content posted each day </p>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="/Teamimages/1.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="/Teamimages/2.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card.Img variant="top" src="/Teamimages/3.webp" className='bg-image hover-zoom' style={{ height: "275px" }} />
                            <Card.Body>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Card.Title className='box-head'>Attract Sales And Profits</Card.Title>
                                <Card.Text className='box-text'>
                                    A job ravenously while Far much that one rank beheld after outside....
                                </Card.Text>
                                <Card.Link className='card-link' href="#">Read More...</Card.Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>


                <div className='slider-logo'>
                    <div className='slider-track'>
                        <div className='slide'>
                            <Card body className='slider'>
                                <ul className='brands'>
                                    <li className='brand-logo'> <img src="1-1 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-2 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'><img src="1-6 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-1 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-2 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-6 (1).webp" alt="" className='slide-img' /></li>

                                    <li className='brand-logo'> <img src="1-1 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-2 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'><img src="1-6 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-1 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-2 (1).webp" alt="" className='slide-img' /></li>
                                    <li className='brand-logo'> <img src="1-6 (1).webp" alt="" className='slide-img' /></li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER SECTION */}

            <div className="Footer">
                <h1 className="footer-section">Subscribe Our Newsletter</h1>
                <p className="footer-text">We don’t send spam so don’t worry.</p>
                <Container>
                    <div className="Search-bar justify-content-center">
                        <div className="search-footer-container justify-content-center">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <input type="text" className=" pt-4 pb-4 ps-4" placeholder="Search by" /></Col>
                                <Col xs={12} sm={12} md={12} lg={4}>
                                    <button className="search-footer d-flex justify-content-center align-items-center">
                                        Find jobs
                                    </button></Col>
                            </Row>
                        </div>
                    </div>
                </Container>

                <Container>
                    <Row>
                        <Col lg={3} sm={12} md={6}>
                            <img src="logo-2.svg" alt="" className="footer-img" />
                            <p className="img-address">Call us<br></br>
                                123 456 7890<br></br>
                                329 Queensberry Street, North Melbourne VIC
                                3051, Australia.<br></br>
                                support@superio.com</p>

                        </Col>
                        <Col lg={2} sm={12} md={7}>
                            <p className="footer-head" style={{ fontSize: "17px" }}>For Candidates
                                <ul>
                                    <li><a href="">Browse Jobs</a></li>
                                    <li><a href="">Browse Categories</a></li>
                                    <li><a href="">Candidate Dashboard</a></li>
                                    <li><a href="">Job Alerts</a></li>
                                    <li><a href=""> My Bookmarks</a></li>
                                </ul></p>

                        </Col>
                        <Col lg={2} sm={12} md={5}>
                            <p className="footer-head" style={{ fontSize: "17px" }}>For Employers
                                <ul>
                                    <li><a href="">Browse Candiates</a></li>
                                    <li><a href="">Employers Dashboard</a></li>
                                    <li><a href="">Add Job</a></li>
                                    <li><a href="">Job Packages</a></li>
                                </ul></p>

                        </Col>
                        <Col lg={3} sm={12} md={6}>
                            <p className="footer-head" style={{ fontSize: "17px" }}>About Us
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Job Page Invoice</a></li>
                                    <li><a href="">Browse Jobs</a></li>
                                    <li><a href="">Term Page</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul></p></Col>
                        <Col lg={2} sm={12} md={6}>
                            <p className="footer-head">Mobile Apps
                                <p style={{ textAlign: "start" }}>Click and Get started in seconds</p>
                                <img className="app-logo" src="applogo.png" alt="" style={{ width: "100%" }} />
                                <img className="app-logo" src="applogo.png" alt="" style={{ width: "100%", marginTop: "-50px" }} /></p>

                        </Col>
                    </Row>
                </Container>
                <div className="footer-lastpart" style={{ color: "#fff" }}>
                    <hr />
                    <span className="social-icon">
                        <TiSocialFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />

                    </span>
                    <p className="last-line" style={{ paddingBottom: "20px " }}>© 2023 Superio by ib-themes. All Right Reserved.</p>
                </div>
            </div>
        </div >

    )
}

export default Home;