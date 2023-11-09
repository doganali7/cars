import "./App.css";
import CarDetails from "./CarDetails";
import { useState } from "react";

//props
//useState
//Event Handlers

// nightMode ekle. (button, onClick) done
// Yeni araba ekle. (input, onChange)
// Son arabayi sil. (button, onClick)

function App() {
  const [nightMode, setNightMode] = useState(false); //state field
  const [newCar, setNewCar] = useState("");
  const [cars, setCars] = useState([
    { brand: "BMW", year: "2010", color: "Black", price: 100000 },
    { brand: "Ferrari", year: "2023", color: "Red", price: 3000000 },
    { brand: "Honda", year: "2015", color: "Grey", price: 10000 },
    { brand: "Bugatti", year: "2020", color: "Blue", price: 200000 },
    { brand: "Lamborghini", year: "2020", color: "Yellow", price: 100000 },
  ]);

  //user interactioni olan hersey islem icin useState kullanmak lazim.
  //user interactioni gerektiren her durum icinda event handler kullanmamiz lazim.

  //input handling
  //yeni bir state yarat. x setX
  //input'a value ver value={x}
  //input'a event handler yaz (onChange)

  //button => onClick

  const toggle = () => {
    setNightMode(!nightMode);
  };

  const deleteCar = () => {
    setCars((latestCar) => latestCar.slice(0, -1));
  };

  return (
    <div className={nightMode ? "NightMode" : "App"}>
      <button className="nightMode-btn" onClick={toggle}>
        {nightMode ? "Kapat" : "Ac"}
      </button>
      <h1
        style={{
          color: nightMode ? "#fff" : "#000",
        }}
      >
        Car List
      </h1>

      <label>Araba Ekle</label>
      <input
        value={newCar}
        onChange={(event) => setNewCar(event.target.value)}
      />
      <button
        onClick={() => {
          const newListOfCars = [
            ...cars, //eski arabalari ekle
            {
              brand: newCar,
              year: "2020",
              color: "Yellow",
              price: 100000,
            },
          ];
          setCars(newListOfCars); //arabalara ekle
        }}
      >
        Add Car
      </button>
      <button onClick={deleteCar}>Delete</button>
      {cars.map((car) => {
        return <CarDetails car={car} nightMode={nightMode} />;
      })}
    </div>
  );
}

export default App;
