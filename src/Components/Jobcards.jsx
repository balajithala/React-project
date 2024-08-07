// JobCards.js
import { useState } from 'react';
import { Col, Badge } from 'react-bootstrap';
import { GoBookmark } from 'react-icons/go';
import { BsBriefcase } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { PiMoneyLight } from 'react-icons/pi';

const jobCards = [
  {
    id: 1,
    title: 'Software Engineer (Android), Freelancer',
    imageSrc: '/brandimages/1-1.webp',
    location: 'London, UK',
    timeAgo: '11 hours ago',
    salary: '$35k-$45k',
    badges: ['Part-time', 'Private', 'Urgent'],
  },
  {
    id: 2,
    title: 'Software Engineer (Android), Freelancer',
    imageSrc: '/brandimages/1-2.webp',
    location: 'London, UK',
    timeAgo: '11 hours ago',
    salary: '$35k-$45k',
    badges: ['Part-time', 'Private', 'Urgent'],
  },
];

const JobCards = ({ isVisible, isFreelancerChecked }) => {
  const filterCards = (card) =>
    !isFreelancerChecked || card.title.toLowerCase().includes('freelancer');

  return (
    <>
      {isVisible && (
        <div className="row">
          {jobCards.filter(filterCards).map((card) => (
            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
              <div className="card flex-row">
                <img
                  className="card-img-left example-card-img-responsive"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-lg">
                    {card.title}
                    <GoBookmark />
                  </h4>
                  <p className="card-text">
                    <span className="brief-icon"><BsBriefcase /> Segment</span>
                    <span className="loc-icon"><IoLocationOutline /> {card.location}</span>
                    <span className="clock-icon"><CiClock2 /> {card.timeAgo}</span>
                    <span className="mon-icon"><PiMoneyLight /> {card.salary}</span>
                  </p>
                  <div className="d-flex">
                    {card.badges.map((badge, index) => (
                      <Badge key={index} pill bg="primary" className="me-1">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </div>
      )}
    </>
  );
};

export default JobCards;
