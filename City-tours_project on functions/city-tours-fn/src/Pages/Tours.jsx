//Component
import { tourData } from "../data/tourData";
import SingleTour from "../Components/SingleTour/SingleTour";
import { useState, useRef } from "react";

//Styles
import "../style/pages/tours-page.scss";

function getUniqueValues(data, property) {
  const values = data.map((item) => item[property]);
  const uniqueValues = [...new Set(values)];
  return uniqueValues;
}

export default function Tours() {
  let searchInp = useRef(null);
  let [data, setData] = useState(tourData);
  let continentOptionRer = useRef(null);

  function sortContinentsByFilter() {
    const continentOption = continentOptionRer.current.value;
    const varToSortByContinent = tourData.filter(
      (item) => item.continent.toLocaleLowerCase() === continentOption
    );
    setData(varToSortByContinent);
  }

  function handleSearch() {
    const inputValue = searchInp.current.value.toLowerCase();
    const filteredData = data.filter((item) =>
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
          <select
            onChange={sortContinentsByFilter}
            ref={continentOptionRer}
            className="hero-tours__search-select"
          >
            {getUniqueValues(tourData, "continent").map((item) => (
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
