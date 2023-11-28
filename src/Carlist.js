import React, { useState } from "react";
import CarDetails from "./CarDetails";
import { useNavigate } from "react-router-dom"; // navigation hook
import "./App.css";

const Carlist = ({ nightMode, setNightMode }) => {
  const [newCar, setNewCar] = useState("");
  const [cars, setCars] = useState([
    { brand: "Ferrari", year: "2023", color: "Red", price: 3000000 },
    { brand: "Bugatti", year: "2020", color: "Blue", price: 200000 },
    { brand: "Lamborghini", year: "2020", color: "Yellow", price: 100000 },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate(); // useNavigate hook as navigate

  const navigateToContact = () => {
    navigate("/contact"); // Navigate to the "/contact" route
  };

  const toggle = () => {
    setNightMode(!nightMode);
  };

  const deleteCar = () => {
    setCars((latestCar) => latestCar.slice(0, -1));
  };

  return (
    <div className={nightMode ? "NightMode" : "App"} style={{ paddingTop: 20 }}>
      <div>
        <button className="nightMode-btn" onClick={toggle}>
          {nightMode ? "Kapat" : "Ac"}
        </button>

        <button
          className="nightMode-btn"
          style={{ marginLeft: 20 }}
          onClick={navigateToContact}
        >
          Contact
        </button>
        <button
          className="nightMode-btn"
          style={{ marginLeft: 20 }}
          onClick={() => navigate("/about")}
        >
          About
        </button>

        <h1
          style={{
            color: nightMode ? "#fff" : "#000",
          }}
        >
          Car List
        </h1>
      </div>

      <div className="box">
        <form name="search">
          <input
            type="text"
            name="txt"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </form>
        <i className="fas fa-search"></i>
      </div>
      <label className="search-bar-label">Araba Ekle</label>
      <input
        className="search-bar"
        value={newCar}
        onChange={(event) => setNewCar(event.target.value)}
      />
      <div className="btn-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <button
            className="add-car"
            onClick={() => {
              const newListOfCars = [
                ...cars,
                {
                  brand: newCar,
                  year: "2020",
                  color: "Yellow",
                  price: 100000,
                },
              ];
              setCars(newListOfCars);
            }}
          >
            Add Car
          </button>
          <button className="delete-car" onClick={deleteCar}>
            Delete
          </button>
        </div>
      </div>
      {cars
        .filter((car) =>
          car.brand.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((car) => (
          <CarDetails
            key={car.brand}
            car={car}
            cars={cars}
            nightMode={nightMode}
            setCars={setCars}
          />
        ))}
    </div>
  );
};

export default Carlist;
