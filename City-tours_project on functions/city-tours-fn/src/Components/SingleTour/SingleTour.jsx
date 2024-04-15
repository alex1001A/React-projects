import { useState } from "react";
import "../../style/components/tour-card.scss";

export default function SingleTour({ props }) {
  let [info, setInfo] = useState(false);

  function handleInfo() {
    setInfo(!info);
  }

  function randomPrice() {
    let randomNum = Math.random()
    const tourPrice = randomNum * (1000 - 200) + 200
    return Math.round(tourPrice)
  }

  return (
    <div className="tour-card">
      <img className="tour-card__img" src={props.img} alt="" />
      <div className="tour-card__content">
        <h3 className="tour-card__content_city-name">{props.city}</h3>
        <h4 className="tour-card__content_tour-name">{props.name}</h4>
        <p className="tour-card__country">Country: <span><b>{props.country}</b></span></p>
        <p className="tour-card__continent">Continent: <span><b>{props.continent}</b></span></p>
        <p className="tour-card__price">Price: {randomPrice()}$</p>
        <p className="tour-card__content_info">
          info{" "}
          <span onClick={handleInfo}>
            {info}
            <i className="fa-solid fa-circle-down"></i>
          </span>
        </p>
        {info && <p className="tour-card__content_description">{props.description}</p>}
      </div>
    </div>
  );
}
