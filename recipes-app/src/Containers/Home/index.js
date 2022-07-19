import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import CarouselCard from "../../Components/CarouselCard";

import Container from "./styles/Container";
import Loading from "../../Components/Loading";

const Home = () => {
  const isLoading = false;

  return (
    <Container>
      {isLoading ? (
        <Loading id="loading-icon" />
      ) : (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>
        </Swiper>
      )}
    </Container>
  );
};

export default Home;
