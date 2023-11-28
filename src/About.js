// About.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // navigation hook
import { Link } from "react-router-dom";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const AboutText = styled.p`
  max-width: 600px;
  text-align: center;
  margin-top: 20px;
`;

const About = () => {
  const navigate = useNavigate(); // call navigate
  const navigateBack = () => {
    navigate("/"); // Navigate to the "/contact" route
  };
  return (
    <AboutWrapper>
      <div>
        <button onClick={navigateBack}>Back</button>

        <Link to="/contact" style={{ marginLeft: "30px" }}>
          Contact
        </Link>
      </div>

      <h1>About Us</h1>
      <AboutText>
        Welcome to our Cars App! This application allows you to manage your car
        list, add new cars, edit their details, and even delete them. It's a
        simple and user-friendly way to keep track of your favorite cars.
      </AboutText>
    </AboutWrapper>
  );
};

export default About;
