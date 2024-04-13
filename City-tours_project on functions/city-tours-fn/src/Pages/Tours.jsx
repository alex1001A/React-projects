//Component
import { tourData } from "../data/tourData";
import SingleTour from "../Components/SingleTour/SingleTour";
import { useState, useRef } from "react";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours() {
  const allTours = tourData.map((item) => (
    <SingleTour key={item.id} props={item} />
  ));

  let searchInp = useRef(null);
  let [data, setData] = useState(allTours);

  function emptyArr() {
    setData([])
  }

  console.log(data);

    
  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">
          <div className="hero-tours__input-wrapper">
            <input
              ref={searchInp}
              className="hero-tours__input-wrapper_search-input"
              type="text"
            />
            <button
              onClick={emptyArr}
              className="hero-tours__input-wrapper_search-button"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="tours">
        <div className="container tours__container">{data}</div>
      </section>
    </>
  );
}
