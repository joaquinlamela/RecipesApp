import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import CarouselCard from "../../Components/CarouselCard";

import Container from "./styles/Container";
import Loading from "../../Components/Loading";
import useWindowSize from "../../Hooks/useWindowSize";
import { BASE } from "../../layout";

const Home = () => {
  const isLoading = false;
  const [width] = useWindowSize();

  const isSmallScreen = width < BASE.breakpoints.tb;

  return (
    <Container isSmallScreen={isSmallScreen}>
      {isLoading ? (
        <Loading id="loading-icon" />
      ) : !isSmallScreen ? (
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
      ) : (
        <>
          <CarouselCard />

          <CarouselCard />

          <CarouselCard />
        </>
      )}
    </Container>
  );
};

export default Home;
