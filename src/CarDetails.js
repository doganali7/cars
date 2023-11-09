import React from "react";
import "./App.css";

//styled component
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: grey;
  color: #000;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CarDetails = ({ car, nightMode }) => {
  return (
    <CardContainer>
      <h2
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        {car.brand}
      </h2>
      <p
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        Year: {car.year}
      </p>
      <p
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        Color: {car.color}
      </p>
      <p
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        Price: ${car.price}
      </p>
    </CardContainer>
  );
};

export default CarDetails;
