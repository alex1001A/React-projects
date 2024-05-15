// React hooks
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";

//Pages
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";

export default function App() {

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/tours" element={<Tours />} />
        </Routes>

      </main>

      <footer></footer>
    </div>
  );
}
