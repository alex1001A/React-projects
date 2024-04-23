//React components/hooks
import { useRef } from "react";

//Component
import Tour from "../Components/Tour/Tour";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours({ tours, setTours }) {

  const inpRef = useRef(null)

  function getSearchedTours() {
      const searchInput = inpRef.current.value.toLowerCase();
      const fullArr = tours
      if (searchInput === '') {
        setTours(fullArr);
        console.log(fullArr, 'Tours - Empty inp');
      } else {
         const searchedTours = tours.filter(tour => tour.city.toLowerCase().includes(searchInput));
         setTours(searchedTours);
         console.log(searchedTours, 'Tours - Not empty inp');

       }
  }

  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">
          <input ref={inpRef} type="text" placeholder="type your favourite city..." onChange={getSearchedTours}/>
        </div>
      </section>
      <section className="tours">
        <div className="container tours__container">
          {tours.map(tour => (
            <Tour key={tour.id} tour={tour} setTours={setTours} tours={tours} />
          ))}
        </div>
      </section>
    </>
  );
}
