import React from "react";

import Container from "./styles/Container";
import RecipeInformation from "./styles/RecipeInformation";
import HotRecipe from "./styles/HotRecipe";
import RecipeName from "./styles/RecipeName";
import RecipeDescription from "./styles/RecipeDescription";
import RecipeToggle from "./styles/RecipeToggle";
import Toggle from "./styles/Toggle";
import Icon from "./styles/Icon";
import ViewDetailButton from "./styles/ViewDetailButton";
import RecipeFooter from "./styles/RecipeFooter";
import UpdatedDate from "./styles/UpdatedDate";
import RecipeImage from "./styles/RecipeImage";

import RecipePhoto from "../../Images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";

import { HiClock } from "react-icons/hi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";

const CarouselCard = () => {
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`;
  };
  return (
    <Container>
      <RecipeInformation>
        <HotRecipe>📜 Hot recipe</HotRecipe>
        <RecipeName>Spicy delicious chicken wings</RecipeName>
        <RecipeDescription>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </RecipeDescription>
        <RecipeToggle>
          <Toggle>
            <Icon>
              <HiClock />
            </Icon>
            30 Minutes
          </Toggle>
          <Toggle>
            <Icon>
              <GiForkKnifeSpoon />
            </Icon>
            Chicken
          </Toggle>
        </RecipeToggle>

        <RecipeFooter>
          <UpdatedDate>
            Last update:
            <p>{getCurrentDate()}</p>
          </UpdatedDate>
          <ViewDetailButton>
            View detail <AiOutlineArrowRight />
          </ViewDetailButton>
        </RecipeFooter>
      </RecipeInformation>
      <RecipeImage src={RecipePhoto} />
    </Container>
  );
};

export default CarouselCard;
