// React hooks
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./Components/Header/Header";
import { tourData } from "./data/tourData";

//Pages
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";

export default function App() {

  const [tours, setTours] = useState(tourData);

  console.log(tours, 'App');

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/tours" element={<Tours tours={tours} setTours={setTours}/>} />
        </Routes>

      </main>

      <footer></footer>
    </div>
  );
}
