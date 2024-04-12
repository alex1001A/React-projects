import { useState } from "react";
import "../../style/components/tour-card.scss";

export default function SingleTour({ props }) {
  let [info, setInfo] = useState(false);

  function handleInfo() {
    setInfo(!info);
  }

  return (
    <div className="tour-card">
      <img className="tour-card__img" src={props.img} alt="" />
      <div className="tour-card__content">
        <h3 className="tour-card__content_city-name">{props.city}</h3>
        <h4 className="tour-card__content_tour-name">{props.name}</h4>
        <p className="tour-card__content_info">
          info{" "}
          <span onClick={handleInfo}>
            {info}
            <i class="fa-solid fa-circle-down"></i>
          </span>
        </p>
        {info && <p className="tour-card__content_description">{props.description}</p>}
      </div>
    </div>
  );
}
