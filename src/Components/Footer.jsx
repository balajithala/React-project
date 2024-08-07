import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="">
                <hr />

                <Container>
                    <Row>
                        <Col lg={3} sm={12} md={6}>
                            <img src="logo-3.svg" alt="" className="footer-content-image" />
                            <p className="image-address">Call us<br></br>
                                <span style={{ color: "blue", fontSize: "20px" }}>123 456 7890</span> <br></br>
                                329 Queensberry Street, North Melbourne VIC
                                3051, Australia.<br></br>
                                support@superio.com</p>

                        </Col>
                        <Col lg={3} sm={12} md={7}>
                            <p className="footer-heading" style={{ fontSize: "22px" }}><h5>For Candidates</h5>
                                <ul>
                                    <li><a href="">Browse Jobs</a></li>
                                    <li><a href="">Browse Categories</a></li>
                                    <li><a href="">Candidate Dashboard</a></li>
                                    <li><a href="">Job Alerts</a></li>
                                    <li><a href=""> My Bookmarks</a></li>
                                </ul></p>

                        </Col>
                        <Col lg={2} sm={12} md={5}>
                            <p className="footer-heading" style={{ fontSize: "22px" }}><h5>For Employers</h5>
                                <ul>
                                    <li><a href="">Browse Candiates</a></li>
                                    <li><a href="">Employers Dashboard</a></li>
                                    <li><a href="">Add Job</a></li>
                                    <li><a href="">Job Packages</a></li>
                                </ul></p>

                        </Col>
                        <Col lg={2} sm={12} md={6}>
                            <p className="footer-heading" style={{ fontSize: "22px" }}><h5>About Us</h5>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Job Page Invoice</a></li>
                                    <li><a href="">Browse Jobs</a></li>
                                    <li><a href="">Term Page</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul></p></Col>
                        <Col lg={2} sm={12} md={6}>
                            <p className="footer-heading"><h5>Mobile Apps</h5>
                                <p style={{ textAlign: "start" }}>Click and Get started in seconds</p>
                                <img className="app-logo" src="applogo.png" alt="" style={{ width: "100%" }} />
                                <img className="app-logo" src="applogo.png" alt="" style={{ width: "100%", marginTop: "-50px" }} /></p>

                        </Col>
                    </Row>
                </Container>
                <div className="footer-lastpart-content">
                    <hr />
                    <span className="social-icon-footer-content">
                        
                            <TiSocialFacebook />
                             <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                       

                        {/* <ul>
                            <li><a><TiSocialFacebook /></a></li>
                            <li><a> <FaTwitter /></a></li>
                            <li><a><FaInstagram /></a></li>
                            <li><a><FaLinkedinIn /></a></li>
                        </ul> */}

                    </span>
                    <p className="last-line" style={{ paddingBottom: "20px " }}>© 2023 Superio by ib-themes. All Right Reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default Footer;