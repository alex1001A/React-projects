//Component
import { tourData } from "../data/tourData";
import SingleTour from "../Components/SingleTour/SingleTour";

export default function Tours() {
  return (
    <>
      <section className="hero"></section>
      <section className="tours">
        <div className="container tours__container">
          {tourData.map((item) => (
            <SingleTour key={item.id} props={item} />
          ))}
        </div>
      </section>
    </>
  );
}
