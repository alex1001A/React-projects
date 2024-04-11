// React hooks
import React from "react";

// Components
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
      </main>
    </>
  );
}