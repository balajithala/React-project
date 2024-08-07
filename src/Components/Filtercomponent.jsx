import React, { useState } from 'react';
import { Col, Badge, Button } from 'react-bootstrap';
import { GoBookmark } from 'react-icons/go';
import { BsBriefcase } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { PiMoneyLight } from 'react-icons/pi';

const FilterableCardComponent = () => {
  // State to control the checkbox
  const [isFreelancerChecked, setIsFreelancerChecked] = useState(false);

  // State to store the filtered job cards
  const [filteredJobCards, setFilteredJobCards] = useState([]);
  
  // State to manage if the filter is applied
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // Job cards data
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
    // Add more cards if needed
  ];

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsFreelancerChecked(event.target.checked);
  };

  // Function to toggle the filter
  const toggleFilter = () => {
    if (isFilterApplied) {
      // If filter is applied, reset it
      setFilteredJobCards(jobCards);
    } else {
      // Apply filter based on checkbox state
      const filtered = jobCards.filter(card => 
        isFreelancerChecked ? card.title.toLowerCase().includes('freelancer') : true
      );
      setFilteredJobCards(filtered);
    }
    setIsFilterApplied(!isFilterApplied);
  };

  // Initialize filtered job cards on component mount
  useState(() => {
    setFilteredJobCards(jobCards);
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="formSwitchDefault"
          checked={isFreelancerChecked}
          onChange={handleCheckboxChange}
          name="custom-check-switch"
        />
        <label className="form-check-label" htmlFor="formSwitchDefault">
          Freelancer
        </label>
      </div>

      <Button
        variant="primary"
        onClick={toggleFilter}
        className="mt-3"
      >
        {isFilterApplied ? 'Remove Filter' : 'Apply Filter'}
      </Button>

      {filteredJobCards.length > 0 ? (
        filteredJobCards.map((card) => (
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
                  <span className="brief-icon">
                    <BsBriefcase /> Segment
                  </span>
                  <span className="loc-icon">
                    <IoLocationOutline /> {card.location}
                  </span>
                  <span className="clock-icon">
                    <CiClock2 /> {card.timeAgo}
                  </span>
                  <span className="mon-icon">
                    <PiMoneyLight /> {card.salary}
                  </span>
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
        ))
      ) : (
        <p>No job cards found.</p>
      )}
    </div>
  );
};

export default FilterableCardComponent;
