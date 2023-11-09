import React, { useState } from "react";
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

const CarDetails = ({ car, nightMode, cars, setCars }) => {
  // editMode ? (editleyecegim alan) : (component)
  // conditional render
  // editlenecek arabanin detaylarina erismem ve update etmem lazim
  // eger araba detaylarini degismeyeceksem ayni birakmam lazim
  const [editMode, setEditMode] = useState(false);
  const [editedCar, setEditedCar] = useState({ ...car });

  const nightModeStyles = {
    color: nightMode ? "#fff" : "#000",
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleEditChange = (field, value) => {
    setEditedCar(() => ({ [field]: value }));
  };

  // savelemekden gorevli function
  const handleSave = () => {
    // map yeni bir array yaratalim
    const updatedCars = cars.map(
      (updatedCar) =>
        // check current car being mapped is the one being edited
        updatedCar === car ? { ...updatedCar, ...editedCar } : updatedCar
      // yes, merge the changes from edited car into current car
      // no, keep the current car unchanged
    );
    //statei updateledik
    setCars(updatedCars);
    //editmodu kapa
    setEditMode(false);
  };
  return (
    <CardContainer>
      {editMode ? (
        <div>
          <label>Brand: </label>
          <input
            value={editedCar.brand}
            onChange={(event) => handleEditChange("brand", event.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2 style={nightModeStyles}>{car.brand}</h2>
          <p style={nightModeStyles}>Year: {car.year}</p>
          <p style={nightModeStyles}>Color: {car.color}</p>
          <p style={nightModeStyles}>Price: ${car.price}</p>
          <button onClick={handleEditMode}>Edit</button>
        </div>
      )}
    </CardContainer>
  );
};

export default CarDetails;
