import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";



const Resume=()=> {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={10} md={8} sm={8} xs={12}>
                        <h3>Resume Alerts!</h3>
                        <p>Ready to jump back in?</p>
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <h5>My Packages</h5>

                                    </div>
                                </div>
                            </div>
                            <Row text-align="center">
                                <Col lg={12} sm={8} md={8} xs={12}>
                                    <Card className='table-head'>
                                        <Table className='default-table'>
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Alert Query</th>
                                                    <th>Number Jobs	</th>
                                                    <th>Times</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Education</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                                <tr>
                                                    <td>Accounting and Finance</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                                <tr>
                                                <td>Education</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                                <tr>
                                                    <td>Accounting and Finance	</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                                <tr>
                                                <td>Education	</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                                <tr>
                                                    <td>Accounting and Finance	</td>
                                                    <td>Category: Education Training, Posted Date: All, Salary: $1000 – $3000</td>
                                                    <td>Jobs found 5</td>
                                                    <td>Weekly</td>
                                                    <td><a href=""><RiDeleteBin6Line /></a></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <p style={{ textAlign: "center", marginTop: "4rem", marginBottom: "5rem" }}>© 2023 Superio by ib-themes. All Right Reserved.</p>
                </Row>
            </Container>
        </div>
    )
}

export default Resume;