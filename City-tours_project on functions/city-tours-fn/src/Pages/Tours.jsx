//React components/hooks
import { useRef, useState } from "react";

//Component
import Tour from "../Components/Tour/Tour";
import { tourData } from "../data/tourData";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours() {
  const [data] = useState(tourData);
  const [tours, setTours] = useState(data);

  const inpRef = useRef(null);
  const optionsOfContinents = useRef(null);

  function getSearchedTours() {
    const searchInput = inpRef.current.value.toLowerCase();

    if (searchInput === "") {
      setTours(data);
    } else {
      const searchedTours = data.filter((tour) =>
        tour.city.toLowerCase().includes(searchInput)
      );
      setTours(searchedTours);
    }
  }

  function getFilteredByContinentTours() {
    const continentsOption = optionsOfContinents.current.value;
    const toursByContinents = data.filter((item) => {
      if (item.continent === continentsOption) {
        return item
      }
      setTours(toursByContinents);
    });
  }

  function getUniqueValues(data, value) {
    const uniqueValue = data.map((obj) => obj[value]);
    const uniqueArr = [...new Set(uniqueValue)];
    return uniqueArr;
  }

  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">
          <input
            ref={inpRef}
            type="text"
            placeholder="type your favourite city..."
            onKeyUp={getSearchedTours}
          />
          <select ref={optionsOfContinents} onChange={getFilteredByContinentTours()}>
            {getUniqueValues(data, "continent").map((continent) => (
              <option ref={optionsOfContinents} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="tours">
        <div className="container tours__container">
          {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} setTours={setTours} tours={tours} />
          ))}
        </div>
      </section>
    </>
  );
}
