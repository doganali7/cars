import React, { useState } from "react";
import CarDetails from "./CarDetails";

const Carlist = ({ nightMode, setNightMode }) => {
  const [newCar, setNewCar] = useState("");
  const [cars, setCars] = useState([
    { brand: "Ferrari", year: "2023", color: "Red", price: 3000000 },
    { brand: "Bugatti", year: "2020", color: "Blue", price: 200000 },
    { brand: "Lamborghini", year: "2020", color: "Yellow", price: 100000 },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  //search bar => yazdigimiz arabayi bize gostersin
  //input value = inital state

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

        <button className="nightMode-btn" style={{ marginLeft: 20 }}>
          Contact
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
