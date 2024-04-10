// React hooks
import React, { Component } from "react";

// Styles
import "./TourList.scss";

// Components
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = id => {
    console.log();
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: filteredTours,
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => {
          return <Tour key={tour.id} item={tour} removeTours={this.removeTour}/>;
        })}
      </section>
    );
  }
}
