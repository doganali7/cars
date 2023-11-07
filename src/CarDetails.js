import React from "react";
import "./App.css";
//styled component
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.li``;

const CarDetails = ({ car }) => {
  let carColor;

  if (car.brand === "Ferrari") {
    carColor = "red";
  } else {
    carColor = "blue";
  }

  return (
    <Wrapper>
      <ul>
        <h3>Araba detaylari</h3>

        {car.price > 20000 ? (
          <>
            <List style={{ color: carColor }}>{car.brand}</List>
            <List className={car.year > 2010 ? "year2010" : "yearLessThan2010"}>
              {car.year}
            </List>
            <List className="class-name">{car.color}</List>
            <List style={{ color: "red", fontSize: "30px" }}>{car.price}</List>
          </>
        ) : (
          <>
            <h1 style={{ color: "orange" }}>{car.brand} is the cheapest</h1>
          </>
        )}
      </ul>
    </Wrapper>
  );
};

export default CarDetails;
