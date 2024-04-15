//Component
import { tourData } from "../data/tourData";
import SingleTour from "../Components/SingleTour/SingleTour";
import { useState, useRef } from "react";

//Styles
import "../style/pages/tours-page.scss";

const continents = [tourData.map((item) => item.continent)];
const uniqueContinents = [...new Set(continents[0])];

export default function Tours() {
  let searchInp = useRef(null);
  let [data, setData] = useState(tourData);
  let optionRef = useRef(null)

  
  function selectedOptionValue() {
    
    console.log(optionRef.current.value);
  }

  function handleSearch() {
    const inputValue = searchInp.current.value.toLowerCase();
    const filteredData = tourData.filter((item) =>
      item.city.toLowerCase().includes(inputValue)
    );
    setData(filteredData);
  }

  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">
          <input
            ref={searchInp}
            className="hero-tours__search-input"
            type="text"
            onKeyUp={handleSearch}
            placeholder="Type city you want..."
          />
          <select onChange={selectedOptionValue} ref={optionRef} className="hero-tours__search-select">
            {uniqueContinents.map((item) => (
              <option key={item.id} value={item.toLocaleLowerCase()}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="tours">
        <div className="container tours__container">
          {data.map((item) => (
            <SingleTour key={item.id} props={item} />
          ))}
        </div>
      </section>
    </>
  );
}
