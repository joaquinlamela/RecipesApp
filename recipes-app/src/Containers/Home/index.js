import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import CarouselCard from "../../Components/CarouselCard";

import Container from "./styles/Container";

const Home = () => {
  return (
    <Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselCard></CarouselCard>
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard></CarouselCard>
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard></CarouselCard>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Home;
