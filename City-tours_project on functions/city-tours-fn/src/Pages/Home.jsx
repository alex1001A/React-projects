//Component
import { tourData } from "../data/tourData";
import SingleTour from "../Components/SingleTour/SingleTour";

export default function Home() {
  return (
    <section>
      {tourData.map((item) => (
        <SingleTour key={item.id} props={item} />
      ))}
    </section>
  );
}
