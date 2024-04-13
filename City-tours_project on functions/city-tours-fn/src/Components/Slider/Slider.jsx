//React hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

//Components

//Styles
import "./Slider.scss";

export default function Slider() {
  return (
    <>
      <div className="hero-content">
        <h1 className="hero-content__title">Hi, and welcome to our city tour site</h1>
        <h2 className="hero-content__desc">
          <span className="hero-content__desc_italic">Welcome to City Travel</span> - your trusted partner in exploring the most
          exciting cities around the world! Embark on an exhilarating journey
          filled with unforgettable experiences and memorable moments. Our
          mission is to introduce you to the cultural heritage and unique
          atmosphere of various cities across the globe.
        </h2>
      </div>
    </>
  );
}
