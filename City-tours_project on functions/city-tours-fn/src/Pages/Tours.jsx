//React components/hooks
import { useEffect, useRef, useState } from "react";

//Component
import Tour from "../Components/Tour/Tour";
import { tourData } from "../data/tourData";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours() {
  const [data, setData] = useState(tourData);
  const [tours, setTours] = useState(data);

  const currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const [cart, setCart] = useState(currentCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id, name, price, img) => {
    const isTourExists = cart.some((item) => item.id === id);

    if (isTourExists) {
      console.log('Тур с таким id уже есть в корзине');
      return;
    }

    setCart((prevCart) => [...prevCart, { id, name, price, img, quantity: 1 }]);
  };

  const inpRef = useRef(null);
  const optionsOfContinents = useRef(null);

  function showAllCards() {
    setTours(data);
    inpRef.current.value = '';
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
    inpRef.current.value = '';
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
            class="form-control"
            ref={inpRef}
            type="text"
            placeholder="type your favourite city..."
            onKeyUp={getSearchedTours}
          />
          <div className="filter-container">
            <span>Sort by continents...</span>
            <select ref={optionsOfContinents}>
              {getUniqueValues(data, "continent").map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
            <button className="button" onClick={getFilteredByContinentTours}>Filter</button>
          </div>
          <button className="button" onClick={showAllCards}>Show All</button>
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
