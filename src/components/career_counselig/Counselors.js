import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Button, Card } from 'react-bootstrap';

import image1 from '../../images/counselor_1.jpg';
import image2 from '../../images/counselor_2.jpg';
import image3 from '../../images/counselor_3.jpg';
import image4 from '../../images/counselor_4.jpg';
import image5 from '../../images/counselor_5.jpg';
import image6 from '../../images/counselor_6.jpg';

const Counselors = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const data = [
        {
            img: image1,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        },
        {
            img: image2,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        },
        {
            img: image3,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        },
        {
            img: image4,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        },
        {
            img: image5,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        },
        {
            img: image6,
            name: "John Snow",
            profession: "Software Engineer",
            rating: '4.5'
        }
    ];

    return (
        <div className='p-5 text-center'>
            <div className='text-center position-relative'>
                <h1 className='fs-2 mb-4 heading'>Top Career Counseling Freelancing Services</h1>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                infinite={true}
                dotListClass="custom-dot-list-style"
                showDots={true}
                arrows={false}
            >
                {data.map((item, index) => (
                    <div key={index}>
                        <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px", marginLeft: "20px" }} className='d-flex justify-content-center align-items-center career_card'>
                            <Card.Img variant="top" src={item.img} style={{ width: "130px", height: "130px", borderRadius: "50%" }} />
                            <Card.Body className='text-center'>
                                <Card.Title style={{ fontSize: "29px" }}>
                                    {item.name}
                                </Card.Title>
                                <Card.Text>
                                    {item.profession}
                                </Card.Text>
                                <Card.Text>
                                    Rating {item.rating}
                                </Card.Text>
                                <Button style={{ padding: "10px 20px", background: "#6b21a8", border: "none" }}>Contact me</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Counselors;
