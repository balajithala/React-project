import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { IoLocationOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';


const ComponentA = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <div class="card flex-row"><img class="card-img-left example-card-img-responsive" className='img-card-emp' src="/brandimages/2-1.webp" />
                            <div class="card-body">
                                <h4 class="card-title h5 h4-sm">Udemy</h4>
                                <p class="card-text">
                                    <span className='loc-icon'><IoLocationOutline /> London, UK</span>
                                    <span className='brief-icon'><BsBriefcase /> Accounting / Finance</span>
                                    <Badge pill bg="primary">Open Jobs – 15</Badge></p>
                            </div>
                        </div>
                    </Col> 
                </Row>
             </Container>
        </div>
    )

}

export default ComponentA;