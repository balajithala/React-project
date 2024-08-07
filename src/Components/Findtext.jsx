// import React, { useState } from 'react';
// import { Col, Badge,Row } from 'react-bootstrap';
// import Button from "react-bootstrap/esm/Button";
// import Container from "react-bootstrap/esm/Container";
// import { BsBriefcase } from "react-icons/bs";
// import { IoLocationOutline } from "react-icons/io5";
// import { CiClock2 } from "react-icons/ci";
// import { PiMoneyLight } from "react-icons/pi";
// import Filter from './Findjobs';
// import { GoBookmark } from "react-icons/go";
// const Findtext=()=>{
//     return(
//         <div>
//             <div className="row">
//                         {Fulltimejobcards.filter(filterCard).map((card) => (
//                             <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
//                                 <div className="card flex-row">
//                                     <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
//                                     <div className="card-body">
//                                         <h4 className="card-title h5 h4-lg">
//                                             {card.title}
//                                             <GoBookmark />
//                                         </h4>
//                                         <p className="card-text">
//                                             <span className="brief-icon"><BsBriefcase /> Segment</span>
//                                             <span className="loc-icon"><IoLocationOutline /> {card.location}</span>
//                                             <span className="clock-icon"><CiClock2 /> {card.timeAgo}</span>
//                                             <span className="mon-icon"><PiMoneyLight /> {card.salary}</span>
//                                         </p>
//                                         <div className="d-flex">
//                                             {card.badges.map((badge, index) => (
//                                                 <Badge key={index} pill bg="primary" className="me-1">
//                                                     {badge}
//                                                 </Badge>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Col>
//                         ))}
//                     </div>
//         </div>
//     )
// }

// export default Findtext;