import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Carlist from "./Carlist";
import About from "./About";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Carlist nightMode={nightMode} setNightMode={setNightMode} />
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
