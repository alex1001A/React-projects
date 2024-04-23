//React components/hooks
import { useRef } from "react";

//Component
import Tour from "../Components/Tour/Tour";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours({ tours, setTours }) {

  const inpRef = useRef(null)

  function showMessage() {
    const searchInput = inpRef.current.value.toLowerCase()
    const searchedTours = tours.filter(tour => searchInput == tour.city)
    setTours(searchedTours)
  }

  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">
          <input ref={inpRef} type="text" placeholder="type your favourite city..." onChange={showMessage}/>
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
