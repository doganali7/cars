import "./App.css";
import CarDetails from "./CarDetails";

//Props

//useState
//Event Handlers

// nightMode ekle. (button, onClick)
// Yeni araba ekle. (input, onChange)

function App() {
  const cars = [
    { brand: "BMW", year: "2010", color: "Black", price: 100000 },
    { brand: "Ferrari", year: "2023", color: "Red", price: 3000000 },
    { brand: "Honda", year: "2015", color: "Grey", price: 10000 },
    { brand: "Bugatti", year: "2020", color: "Blue", price: 200000 },
    { brand: "Lamborghini", year: "2020", color: "Yellow", price: 100000 },
  ];

  return (
    <div className="App">
      <h1>Car List</h1>
      {cars.map((car) => {
        return <CarDetails car={car} />;
      })}
    </div>
  );
}

export default App;
