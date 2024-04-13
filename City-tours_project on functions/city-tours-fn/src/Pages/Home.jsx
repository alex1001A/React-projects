// React hooks


//Components
import Slider from "../Components/Slider/Slider";

//Styles
import '../style/pages/home-page.scss'

export default function Home() {
  return (
    <>
      <section className="hero">
        <Slider/>
      </section>
    </>
  );
}
