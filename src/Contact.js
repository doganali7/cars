// Contact.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // navigation hook

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ContactInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const ContactButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const Contact = () => {
  const navigate = useNavigate(); // call navigate
  const navigateBack = () => {
    navigate("/"); // Navigate to the "/contact" route
  };
  return (
    <ContactWrapper>
      <button onClick={navigateBack}>Back</button>
      <h1>Contact Form</h1>
      <ContactForm>
        <label htmlFor="name">Name:</label>
        <ContactInput type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <ContactInput type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <ContactInput as="textarea" id="message" name="message" />

        <ContactButton type="submit">Submit</ContactButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
