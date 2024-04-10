// React hooks
import React, { Component } from "react";

// Styles
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }

  render() {
    const {id, city, img, name, info } = this.props.item;
    const {removeTour} = this.props

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={()=>{removeTour(id)}}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3 className="tour-info__city-name">{city}</h3>
          <h4 className="tour-info__tour-name">{name}</h4>
          <h5 className="tour-info__info">
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && (
            <p className="tour-info__description">{info}</p>
          )}
        </div>
      </article>
    );
  }
}
