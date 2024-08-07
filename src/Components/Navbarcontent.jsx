import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';


const Navbarcontent = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="menu-section">
                <div className='nav-bar'>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container fluid>
                            <img src="logo-3.svg" alt="myimage" className='home-logo' />
                            <Navbar.Brand href="#home"></Navbar.Brand>
                            <Navbar.Toggle img src="menu (1).png" alt="" className='navbar-menu' onClick={handleShow} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/Home"><Nav.Link href="#home" id="nav-link">Home</Nav.Link></Link>
                                    <Link to="/Findjobs"><Nav.Link href="#link" id="nav-link">Find jobs</Nav.Link></Link>
                                    <div class="dropdown">
                                        <p className="dropdown-list-link">Employers</p>
                                        <div class="dropdown-content">
                                            <Link to="/Employers"><a>Employers List</a></Link>
                                            <Link to="/EmployersDashboard"><a>Employers Dashboard</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list-link">Candidates</p>
                                        <div class="dropdown-content">
                                            <Link to="/Candidateslist"><a href="#">Candidates List</a></Link>
                                            <Link to="/EmployersDashboard"><a href="#">Candidates Dashboard</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list-link">Blog</p>
                                        <div class="dropdown-content">
                                            <Link to="/Blog"><a href="#">Blog</a></Link>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <p className="dropdown-list-link">Pages</p>
                                        <div class="dropdown-content">
                                            <Link to="/Blog"><a href="#">Blog</a></Link>
                                            <Link to="/Blog"><a href="#">Blog</a></Link>
                                            <Link to="/Blog"><a href="#">Blog</a></Link>
                                        </div>
                                    </div>

                                </Nav>
                                <button className='login-link-btn'>Login / Register</button>
                                <button className='post-link-btn'>Job Post</button>{' '}
                            </Navbar.Collapse>


                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><img src="logo-3.svg" alt="" srcset="myimage" className='home-img'/></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='offcanvas-body'>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Link to="Home"><Nav.Link href="#home" id="nav-dropdown">Home</Nav.Link></Link>
                                            <Link to="Findjobs"><Nav.Link href="#link" id="basic-nav-dropdown">Find jobs</Nav.Link></Link>
                                            <div class="dropdown">
                                                <p className="dropdown-list-link">Employers</p>
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
            </div>
        </div>
    )

};
export default Navbarcontent;