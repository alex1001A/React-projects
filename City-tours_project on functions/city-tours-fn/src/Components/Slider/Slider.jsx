//React hooks
import { Swiper, SwiperSlide } from "swiper/react";

//Components
import Slider1 from "../../img/home-page/hero-banner.jpg";

//Styles
import "./Slider.scss";

export default function Slider() {
  return (
    <>
        
      <div className="slider-wrapper">
        <Swiper
          spaceBetween={200}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
