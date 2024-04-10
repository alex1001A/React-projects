// React hooks
import React, { Component } from "react";

// Components
import Navbar from "./Components/Navbar/Navbar";
import TourList from "./Components/Tourlist/TourList";

// Styles
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}
