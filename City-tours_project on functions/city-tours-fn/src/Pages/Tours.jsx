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

  const currentCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  const [cart, setCart] = useState(currentCart);

  function setToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const inpRef = useRef(null);
  const optionsOfContinents = useRef(null);
  
  // const addToCart = (id, name, price, img) => {
  //   setCart((prevCart) => [...prevCart, { id, name, price, img }]);
  //   setToLocalStorage()
  // };

  const addToCart = (id, name, price, img) => {
    // Проверяем, есть ли тур с таким же id в корзине
    const isTourExists = cart.some(item => item.id === id);

    if (!isTourExists) {
        // Если тура с таким id еще нет в корзине, добавляем его
        setCart(prevCart => [...prevCart, { id, name, price, img, quantity: 1 }]);
        setToLocalStorage();
    } else {
        // Если тур с таким id уже есть в корзине, ничего не делаем
        console.log('Тур с таким id уже есть в корзине');
    }
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
