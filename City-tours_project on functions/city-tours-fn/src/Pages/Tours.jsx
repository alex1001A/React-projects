//Component
import Tour from "../Components/Tour/Tour";

//Styles
import "../style/pages/tours-page.scss";

export default function Tours({ tours, setTours }) {

  return (
    <>
      <section className="hero-tours">
        <div className="container hero-tours__container">

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
