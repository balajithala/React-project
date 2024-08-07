import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Table from 'react-bootstrap/Table';


const Package=()=> {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={10} md={8} sm={8} xs={12}>
                        <h3>Packages!</h3>
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
                                    {/* <Card className='table-head'> */}
                                        <Table className='default-table'>
                                            <thead>
                                                <tr >
                                                    <th>#</th>
                                                    <th>Transaction id	</th>
                                                    <th>Package	</th>
                                                    <th>Expiry</th>
                                                    <th>Total Jobs/CVs</th>
                                                    <th>Used</th>
                                                    <th>Remaining</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Super CV Pack</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Gold Jobs package</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>

                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Silver Jobs package</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Super CV Pack</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Gold Jobs package</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>#593677663</td>
                                                    <td><a href="">Silver Jobs package</a></td>
                                                    <td>Jan 11, 2021</td>
                                                    <td>50</td>
                                                    <td>8</td>
                                                    <td>42</td>
                                                    <td style={{ color: "green" }}>Active</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    {/* </Card> */}
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

export default Package;