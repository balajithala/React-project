import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbarcontent from "../Components/Navbarcontent";



const EmployersDashboard = () => {
    return (

        <div className="">

            <div className="container-fluid">
                <Row>
                    <div><Navbarcontent /></div>
                    <Col lg={3}>
                        <div className="sidebar-inner" style={{ display: "flex", flexDirection: "row" }}>
                            <ul>
                                <h4>DASHBOARD</h4>

                                <Link to={"/Adminhome"}><button className="sidebar-btn"><li><a href=""></a><span><IoHomeOutline /></span>Home</li></button></Link>
                                <Link to={"/Companyprofile"}> <button className="sidebar-btn"><li><a href=""></a><span><FaRegUser /></span>Company Profile</li></button></Link>
                                <Link to={"/Post"}> <button className="sidebar-btn"><li><a href=""></a><span><TiArrowRightOutline /></span>Post A New Job</li></button></Link>
                                <Link to={"/Managesection"}><button className="sidebar-btn"><li><a href=""></a>Manage Jobs</li></button></Link>
                                <Link to={"/Applicants"}><button className="sidebar-btn"><li><a href=""></a>All Applicants</li></button></Link>
                                <Link to={"/Shortlist"}><button className="sidebar-btn"><li><a href=""></a>Shortlisted Resume</li></button></Link>
                                <Link to={"/Package"}><button className="sidebar-btn"><li><a href=""></a>Package</li></button></Link>
                                <Link to={"/Message"}><button className="sidebar-btn"><li><a href=""></a>Messages</li></button></Link>
                                <Link to={"/Resume"}><button className="sidebar-btn"><li><a href=""></a>Resume Alert</li></button></Link>
                                <button className="sidebar-btn"><li><a href=""></a>Change Password</li></button>
                                <button className="sidebar-btn"><li><a href=""></a>Logout</li></button>
                                <button className="sidebar-btn" danger="true"><li><a href=""></a>Delete Profile </li></button>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default EmployersDashboard;