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

  const [cart, setCart] = useState([]);

  function setToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const inpRef = useRef(null);
  const optionsOfContinents = useRef(null);
  
  const addToCart = (name, price) => {
    setCart((prevCart) => [...prevCart, { name, price }]);
    setToLocalStorage()
  };
  
  function showAllCards() {
    const all = data.map(item => item)
    setTours(all)
    inpRef.current.value = ''
  }
  
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

  const getFilteredByContinentTours = () => {
    const value = optionsOfContinents.current.value;
    const array = data.filter((item) => item.continent === value);
    setTours(array);
    inpRef.current.value = ''
  };

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
          <select ref={optionsOfContinents}>
            {getUniqueValues(data, "continent").map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
          <button onClick={getFilteredByContinentTours}>Filter</button>
          <button onClick={showAllCards}>Show All</button>
        </div>
      </section>
      <section className="tours">
        <div className="container tours__container">
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              tour={tour}
              setTours={setTours}
              tours={tours}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}
