import React, { useState } from 'react';
import { Col, Badge } from 'react-bootstrap';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { IoFilterSharp } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { PiMoneyLight } from "react-icons/pi";
import { GoBookmark } from "react-icons/go";
import Offcanvas from 'react-bootstrap/Offcanvas';

// FILTER STATE SECTION
const Filter = () => {
    // OFF-CANVAS DECLARATION
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SELECT BUTTONS AND RADIO BUTTONS STATE DECLARATION
    // const [isFreelancerChecked, setIsFreelancerChecked] = useState(false);
    // const [isFulltimeChecked, setIsFulltimeChecked] = useState(false);
    // const [isParttimeChecked, setIsParttimeChecked] = useState(false);
    // const [isTemproaryChecked, setIsTemproaryChecked] = useState(false);

    // RADIO BUTTONS STATE DECLARATION
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isLasthourChecked, setIsLasthourChecked] = useState(false);
    const [isPrimaryradioChecked, setIsPrimaryradioChecked] = useState(false);
    const [isSecondaryradioChecked, setIsSecondaryradioChecked] = useState(false);
    const [isCustomradioChecked, setIsCustomradioChecked] = useState(false);
    const [isDefaultradioChecked, setIsDefaultradioChecked] = useState(false);
    // SELECT BUTTONS STATE DECLARATION
    const [isFreshyearChecked, setIsFreshyearChecked] = useState(false);
    const [isFirstyearChecked, setIsFirstyearChecked] = useState(false);
    const [isSecondyearChecked, setIsSecondyearChecked] = useState(false);
    const [isThirdyearChecked, setIsThirdyearChecked] = useState(false);
    const [isFourthyearChecked, setIsFourthyearChecked] = useState(false);





    // Function to handle checkbox change
    // FREELANCER SECTION
    // const handleCheckboxChange = (event) => {
    //     setIsFreelancerChecked(event.target.checked);
    // };
    // FULL-TIME SECTION
    // const fulltimecheckboxChange = (event) => {
    //     setIsFulltimeChecked(event.target.checked);
    // };
    // PART-TIME SECTION
    // const ParttimecheckboxChange = (event) => {
    //     setIsParttimeChecked(event.target.checked);
    // };
    // TEMPROARY SECTION
    // const TemproarycheckboxChange = (event) => {
    //     setIsTemproaryChecked(event.target.checked);
    // };
    // ALL SECTION
    const AllcheckboxChange = (event) => {
        setIsAllChecked(event.target.checked);
    };
    // LAST-HOUR SECTION
    const LasthourcheckboxChange = (event) => {
        setIsLasthourChecked(event.target.checked);
    };
    // LAST- 24 HOUR SECTION
    const PrimaryradiocheckboxChange = (event) => {
        setIsPrimaryradioChecked(event.target.checked);
    };
    // LAST- 7 Day SECTION
    const SecondaryradiocheckboxChange = (event) => {
        setIsSecondaryradioChecked(event.target.checked);
    };
    // LAST- 14 Day SECTION
    const CustomradiocheckboxChange = (event) => {
        setIsCustomradioChecked(event.target.checked);
    };
    // LAST- 30 Day SECTION
    const DefaultradiocheckboxChange = (event) => {
        setIsDefaultradioChecked(event.target.checked);
    };

    //  EXPERIENCE SELECT BUTTON SECTION

    // FRESH -EXPERIENCE SECTION
    const FreshyearcheckboxChange = (event) => {
        setIsFreshyearChecked(event.target.checked);
    };
    // FIRST -EXPERIENCE SECTION
    const FirstyearcheckboxChange = (event) => {
        setIsFirstyearChecked(event.target.checked);
    };
    // SECOND YEAR -EXPERIENCE SECTION
    const SecondyearcheckboxChange = (event) => {
        setIsSecondyearChecked(event.target.checked);
    };
    // THIRD YEAR -EXPERIENCE SECTION
    const ThirdyearcheckboxChange = (event) => {
        setIsThirdyearChecked(event.target.checked);
    };
    // FOURTH YEAR -EXPERIENCE SECTION
    const FourthyearcheckboxChange = (event) => {
        setIsFourthyearChecked(event.target.checked);
    };




    // FILTER THE CARD SECTION
    // FREELANCER-CARD
    // const filterCards = (card) => {
    //     if (isFreelancerChecked) {
    //         return card.title.toLowerCase().includes('Freelancer');
    //     }
    //     return true;
    // };
    // FULL-TIMEJOB-CARD
    // const Fulltimejobcards = (card) => {
    //     if (isFulltimeChecked) {
    //         return card.title.toLowerCase().includes('Fulltime');
    //     }
    //     return true;
    // };
    // PART-TIMEJOB-CARD
    // const Parttimejobcards = (card) => {
    //     if (isParttimeChecked) {
    //         return card.title.toLowerCase().includes('Parttime');
    //     }
    //     return true;
    // };

    // TEMPROARY-JOB-CARD
    // const Temporaryjobcards = (card) => {
    //     if (isTemproaryChecked) {
    //         return card.title.toLowerCase().includes('Temporary');
    //     }
    //     return true;
    // };
    // ALL JOB SECTION
    const Alljobcards = (card) => {
        if (isAllChecked) {
            return card.title.toLowerCase().includes('All');
        }
        return true;
    };
    // LAST-HOUR JOB SECTION
    const lasthourjobcards = (card) => {
        if (isLasthourChecked) {
            return card.title.toLowerCase().includes('last Hour');
        }
        return true;
    };
    // LAST- 24 HOUR JOB SECTION
    const Primaryradiojobcards = (card) => {
        if (isPrimaryradioChecked) {
            return card.title.toLowerCase().includes('Primary radio');
        }
        return true;
    };
    // LAST- 7 DAY JOB SECTION
    const Secondaryradiojobcards = (card) => {
        if (isSecondaryradioChecked) {
            return card.title.toLowerCase().includes('Secondary radio');
        }
        return true;
    };
    // LAST- 14 DAY JOB SECTION
    const Customradiojobcards = (card) => {
        if (isCustomradioChecked) {
            return card.title.toLowerCase().includes('Custom radio');
        }
        return true;
    };
    // LAST- 30 DAY JOB SECTION
    const Defaultradiojobcards = (card) => {
        if (isDefaultradioChecked) {
            return card.title.toLowerCase().includes('Default radio');
        }
        return true;
    };

    //  EXPERIENCE SELECT BUTTON SECTION

    // FRESH -EXPERIENCE SECTION
    const Freshyearjobcards = (card) => {
        if (isFreshyearChecked) {
            return card.title.toLowerCase().includes('Fresh year');
        }
        return true;
    };
    // FIRST -EXPERIENCE SECTION
    const Firstyearjobcards = (card) => {
        if (isFirstyearChecked) {
            return card.title.toLowerCase().includes('First year');
        }
        return true;
    };
    // SECOND -EXPERIENCE SECTION
    const Secondyearjobcards = (card) => {
        if (isSecondyearChecked) {
            return card.title.toLowerCase().includes('Second year');
        }
        return true;
    };
    // THIRD -EXPERIENCE SECTION
    const Thirdyearjobcards = (card) => {
        if (isThirdyearChecked) {
            return card.title.toLowerCase().includes('Third year');
        }
        return true;
    };
    // THIRD -EXPERIENCE SECTION
    const Fourthyearjobcards = (card) => {
        if (isFourthyearChecked) {
            return card.title.toLowerCase().includes('Fourth year');
        }
        return true;
    };
    // FILTER CARD NAME CHANGE TO USER CARD NAME(SELECT BUTTON)
    // const filterCard = (card) => Fulltimejobcards(card);
    // const ParttimeCard = (card) => Parttimejobcards(card);
    // const TemproaryCard = (card) => Temporaryjobcards(card);
    // FILTER CARD NAME CHANGE TO USER CARD NAME (RADIO BUTTON)
    const AllCard = (card) => Alljobcards(card);
    const LasthourCard = (card) => lasthourjobcards(card);
    const PrimaryradioCard = (card) => Primaryradiojobcards(card);
    const SecondaryradioCard = (card) => Secondaryradiojobcards(card);
    const CustomradioCard = (card) => Customradiojobcards(card);
    const DefaultradioCard = (card) => Defaultradiojobcards(card);
    // FILTER CARD NAME CHANGE TO USER CARD NAME (SELECT BUTTON)
    const FreshyearCard = (card) => Freshyearjobcards(card);
    const FirstyearCard = (card) => Firstyearjobcards(card);
    const SecondyearCard = (card) => Secondyearjobcards(card);
    const ThirdyearCard = (card) => Thirdyearjobcards(card);
    const FourthyearCard = (card) => Fourthyearjobcards(card);

    // SELECT BUTTON CARD
    //  FREELANCER CARD
    // const jobCards = [
    //     {
    //         id: 1, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-1.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']
    //     },
    //     {
    //         id: 2, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-2.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },

    // ];
    //  FULL-TIME CARD
    // const FulltimejobCards = [
    //     {
    //         id: 3, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-6.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },
    //     {
    //         id: 4, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/2-1.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },

    // ];
    // PART-TIME CARD
    // const ParttimejobCards = [
    //     {
    //         id: 5, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/2-5.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },
    //     {
    //         id: 6, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/2-6.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },

    // ];
    // TEMPORARY-TIME CARD
    // const TemproaryjobCards = [
    //     {
    //         id: 7, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/6-2.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },
    //     {
    //         id: 8, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/6-3.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

    //     },
    // ];

    // RADIO BUTTON CARD
    // All CARD
    const AlljobCards = [
        {
            id: 9, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/6-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 10, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/6-5.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // LAST-HOUR CARD
    const lasthourjobCards = [
        {
            id: 11, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-1.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 12, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-3.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // LAST 24 HOURS CARD
    const PrimaryradiojobCards = [
        {
            id: 13, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // LAST 7 DAYS CARD
    const SecondaryradiojobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // LAST 14 DAYS CARD
    const CustomradiojobCards = [
        {
            id: 16, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 17, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // LAST 30 DAYS CARD
    const DefaultradiojobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];

    // SELECT BUTTON CARD
    // FRESH YEAR CARD
    const FreshyearjobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // FIRST YEAR CARD
const FirstyearjobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // SECOND YEAR CARD
const SecondyearjobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // THIRD YEAR CARD
const ThirdyearjobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];
    // FOURTH YEAR CARD
const FourthyearjobCards = [
        {
            id: 14, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
        {
            id: 15, title: 'Software Engineer (Android), Freelancer', imageSrc: '/brandimages/1-4.webp', location: 'London, UK', timeAgo: '11 hours ago', salary: '$35k-$45k', badges: ['Part-time', 'Private', 'Urgent']

        },
    ];

    return (
        <div className="find-job">
            <div className="find-head">
                <h3>Home/Find</h3>
            </div>
            <div>


                <button variant="" onClick={handleShow}
                    className="filter-btn">filter<IoFilterSharp />
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>

                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Offcanvas.Title style={{ paddingBottom: '15px' }}>Job Type</Offcanvas.Title>
                        {/* Checkbox for Freelancer filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                // checked={isFreelancerChecked}
                                // onChange={handleCheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                Freelancer
                            </label>
                        </div>
                        {/* Checkbox for Full-time filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                // checked={isFulltimeChecked}
                                // onChange={fulltimecheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                Fulltime
                            </label>
                        </div>
                        {/* Checkbox for Part-time filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                // checked={isParttimeChecked}
                                // onChange={ParttimecheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                Parttime
                            </label>
                        </div>

                        {/* Checkbox for Temproary filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                // checked={isTemproaryChecked}
                                // onChange={TemproarycheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                Temproary
                            </label>
                        </div>
                        <Offcanvas.Title style={{ paddingBottom: '15px' }}>Date Posted</Offcanvas.Title>
                        {/* Radio button for all  filter */}
                        <div class="form-check custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isAllChecked}
                                onClick={AllcheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                All
                            </label>
                        </div>
                        {/* Radio button for Last Hour  filter */}
                        <div class="form-check custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isLasthourChecked}
                                onClick={LasthourcheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                LastHour
                            </label>
                        </div>
                        {/* Radio button for Last- 24 Hour  filter */}
                        <div class="custom-control custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isPrimaryradioChecked}
                                onClick={PrimaryradiocheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                Last 24 Hour
                            </label>
                        </div>
                        {/* Radio button for Last- 7 Days  filter */}
                        <div class="custom-control custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isSecondaryradioChecked}
                                onClick={SecondaryradiocheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                Last 7 Days
                            </label>
                        </div>
                        {/* Radio button for Last- 14 Days  filter */}
                        <div class="custom-control custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isCustomradioChecked}
                                onClick={CustomradiocheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                Last 14 Days
                            </label>
                        </div>
                        {/* Radio button for Last- 30 Days  filter */}
                        <div class="custom-control custom-radio">
                            <input
                                id="customRadio"
                                className="custom-radio-input"
                                type="radio"
                                checked={isDefaultradioChecked}
                                onClick={DefaultradiocheckboxChange}
                                name='custom-primary-radio'
                            />
                            <label className="custom-control-label" For="formRadioDefault">
                                Last 30 Days
                            </label>
                        </div>

                        <Offcanvas.Title style={{ paddingBottom: '15px' }}>Experience Level</Offcanvas.Title>
                        {/* CHECK BOX SECTION */}

                        {/* Checkbox for Fresh filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                checked={isFreshyearChecked}
                                onChange={FreshyearcheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                Fresh
                            </label>
                        </div>
                         {/* Checkbox for First filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                checked={isFirstyearChecked}
                                onChange={FirstyearcheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                1 Year
                            </label>
                        </div>
                        {/* Checkbox for Second filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                checked={isSecondyearChecked}
                                onChange={SecondyearcheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                2 Year
                            </label>
                        </div>
                        {/* Checkbox for Third filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                checked={isThirdyearChecked}
                                onChange={ThirdyearcheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                3 Year
                            </label>
                        </div>
                        {/* Checkbox for First filter */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="formSwitchDefault"
                                checked={isFourthyearChecked}
                                onChange={FourthyearcheckboxChange}
                                name='custom-check-switch'
                            />
                            <label className="form-check-label" For="formSwitchDefault">
                                4 Year
                            </label>
                        </div>

                        <Offcanvas.Title style={{ paddingBottom: '15px' }}>Tags</Offcanvas.Title>
                        <span class="inline-flex items-baselin">
                            <ul className="tag-style-one">
                                <li><a href="">App</a></li>
                                <li><a href="">Administrative</a></li>
                                <li className="active"><a href="">Andriod</a></li>
                                <li><a href="">Wordpress</a></li>
                                <li><a href="">Design</a></li>
                                <li><a href="">React</a></li>

                            </ul>
                        </span>
                        <Offcanvas.Title style={{ backgroundColor: "#f3f7fb", paddingTop: "20px" }}>Recruiting?</Offcanvas.Title>
                        <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
                        <Button>Start Recuriting Now</Button>
                    </Offcanvas.Body>
                </Offcanvas>
                <span>16 jobs</span>

                {/* Render job cards */}
                <Container>
                    {/* <div className="row">
                        {jobCards.filter(filterCards).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    </div> */}
                    {/* Render full-time card  */}

                    {/* [<div className="row">
                        {FulltimejobCards.filter(filterCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    </div> */}
                    {/*  Render part-time card */}
                    {/* <div className="row">
                        {ParttimejobCards.filter(ParttimeCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    </div> */}
                    {/* Render Temproary card */}
                    {/* <div className="row">
                        {TemproaryjobCards.filter(TemproaryCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    </div> */}
                    {/* Render All card */}
                    <div className="row">
                        {AlljobCards.filter(AllCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    {/* Render Last-Hour card */}
                    <div className="row">
                        {lasthourjobCards.filter(LasthourCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    {/* Render Last-24 Hour card */}
                    <div className="row">
                        {PrimaryradiojobCards.filter(PrimaryradioCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    {/* Render Last-7 Days card */}
                    <div className="row">
                        {SecondaryradiojobCards.filter(SecondaryradioCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    {/* Render Last-14 Days card */}
                    <div className="row">
                        {CustomradiojobCards.filter(CustomradioCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                    {/* Render Last-30 Days card */}
                    <div className="row">
                        {DefaultradiojobCards.filter(DefaultradioCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                     {/* Render Fresh year card */}
                     <div className="row">
                        {FreshyearjobCards.filter(FreshyearCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                     {/* Render Second year card */}
                     <div className="row">
                        {SecondyearjobCards.filter(SecondyearCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                     {/* Render Third year card */}
                     <div className="row">
                        {ThirdyearjobCards.filter(ThirdyearCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                     {/* Render Fourth year card */}
                     <div className="row">
                        {FourthyearjobCards.filter(FourthyearCard).map((card) => (
                            <Col key={card.id} xs={12} sm={6} md={10} lg={6}>
                                <div className="card flex-row">
                                    <img className="card-img-left example-card-img-responsive" src={card.imageSrc} alt={card.title} />
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
                </Container>
            </div>
            <div class="card flex-row"><img class="card-img-right example-card-img-responsive" src="/postboot/assets/img/thumbnail.jpg" />
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">Recruiting?
                    </h4>
                    <p class="card-text">Advertise your jobs to millions of monthly users and search 15.8 million
                        CVs in our database.</p>
                    <button type="button">start recuriting Now</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
