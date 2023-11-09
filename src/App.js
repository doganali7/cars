import "./App.css";
import CarDetails from "./CarDetails";
import { useState } from "react";

//props
//useState
//Event Handlers

// nightMode ekle. (button, onClick) done
// Yeni araba ekle. (input, onChange)
// Son arabayi sil. (button, onClick)

//user interactioni olan hersey islem icin useState kullanmak lazim.
//user interactioni gerektiren her durum icinda event handler kullanmamiz lazim.

//input handling
//yeni bir state yarat. x setX
//input'a value ver value={x}
//input'a event handler yaz (onChange)

//button => onClick

function App() {
  const [nightMode, setNightMode] = useState(false); //state field
  const [newCar, setNewCar] = useState("");
  const [cars, setCars] = useState([
    { brand: "Ferrari", year: "2023", color: "Red", price: 3000000 },
    { brand: "Bugatti", year: "2020", color: "Blue", price: 200000 },
    { brand: "Lamborghini", year: "2020", color: "Yellow", price: 100000 },
  ]);

  //search bar => yazdigimiz arabayi bize gostersin
  //input value = inital state

  const [searchQuery, setSearchQuery] = useState("");

  const toggle = () => {
    setNightMode(!nightMode);
  };

  const deleteCar = () => {
    setCars((latestCar) => latestCar.slice(0, -1));
  };

  return (
    <div className={nightMode ? "NightMode" : "App"} style={{ paddingTop: 20 }}>
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

      <div>
        <div class="box">
          <form name="search">
            <input
              type="text"
              class="input"
              name="txt"
              onmouseout="this.value = ''; this.blur();"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
          <i class="fas fa-search"></i>
        </div>
      </div>
      {/* 
      <div>
        <label className="search-bar-label">Search Car</label>
        <input
          className="search-bar"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div> */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="search-bar-label">Araba Ekle</label>
        <input
          className="search-bar"
          value={newCar}
          onChange={(event) => setNewCar(event.target.value)}
        />
        <button
          className="add-car"
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
        <button className="delete-car" onClick={deleteCar}>
          Delete
        </button>
      </div>
      {cars
        .filter((car) =>
          car.brand.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((car) => {
          return (
            <CarDetails
              key={car.brand}
              car={car}
              cars={cars}
              nightMode={nightMode}
              setCars={setCars}
            />
          );
        })}
    </div>
  );
}

export default App;
