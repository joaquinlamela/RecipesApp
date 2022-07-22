/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import CarouselCard from "../../Components/CarouselCard";

import Container from "./styles/Container";
import Loading from "../../Components/Loading";
import useWindowSize from "../../Hooks/useWindowSize";
import { BASE } from "../../layout";
import { useRecoilState, useRecoilValue } from "recoil";
import { recipeListAtom } from "../../recoil/atom/recipesAtom";
import { axiosInstance } from "../../utils/axios";

import { db } from "../../Firebase/firebaseConfig";

const Home = () => {
  const [width] = useWindowSize();
  const isSmallScreen = width < BASE.breakpoints.tb;
  const [isLoading, setIsLoading] = useState(true);

  const [_, setRecipeList] = useRecoilState(recipeListAtom);

  const requestRecipe = async () => {
    setIsLoading(true);
    const recipes = [];
    const response = await axiosInstance.get(
      `random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    );
    recipes.push(response.data.recipes[0]);
    const recipe = response.data.recipes[0];
    await setDoc(doc(db, "recipes", `${recipe.id}`), recipe);

    // await addDoc(collection(db, "recipes"), {
    //   recipe: response.data.recipes[0],
    // });
    // for (let i = 0; i < 3; i++) {
    //   const response = await axiosInstance.get(
    //     `random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    //   );
    //   recipes.push(response.data.recipes[0]);
    // }
    setRecipeList(recipes);
    setIsLoading(false);
  };

  const recipes = useRecoilValue(recipeListAtom);

  useEffect(() => {
    requestRecipe();
  }, []);

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
            <CarouselCard recipe={recipes[0]} />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard recipe={recipes[0]} />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard recipe={recipes[0]} />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <CarouselCard recipe={recipes[0]} />

          <CarouselCard recipe={recipes[0]} />

          <CarouselCard recipe={recipes[0]} />
        </>
      )}
    </Container>
  );
};

export default Home;
