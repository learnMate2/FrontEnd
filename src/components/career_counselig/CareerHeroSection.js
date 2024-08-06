import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const CareerHeroSection = () => {
  return (
    <div>
      <div className="career_banner mb-5">
        <div className="career_banner_text text-white">
          <h1 className="mb-4">Hire Freelance Career Counselors</h1>
          <div>
          <h3>Find Best Career Counseling Experts Online</h3>
          <p>Get work done securely and flexibly by top Freelancers offering Career Counseling Services on LearnMate.</p>
          </div>
          
          <InputGroup className="mt-4">
            <Form.Control
              placeholder="Search Expert"
              aria-label="search expert"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup>

        </div>
      </div>
    </div>
  )
}

export default CareerHeroSection
