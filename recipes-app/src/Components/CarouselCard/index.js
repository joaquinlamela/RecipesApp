import React from "react";

import PropTypes from "prop-types";

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

import { HiClock } from "react-icons/hi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";

const CarouselCard = ({ recipe }) => {
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`;
  };

  const getFoodType = () => {
    if (recipe.vegetarian) return "Vegetarian";
    if (recipe.vegan) return "Vegan";
    return "Not vegan";
  };

  const getDescription = () => {
    let description = recipe.summary;
    const index = description.indexOf(".");
    description = description.substring(0, index);
    description = description.replace(/<\/?[^>]+(>|$)/g, "");
    return description;
  };

  return (
    <Container>
      <RecipeInformation>
        <HotRecipe>📜 Random recipe</HotRecipe>
        <RecipeName>{recipe.title}</RecipeName>
        <RecipeDescription>{getDescription()}.</RecipeDescription>
        <RecipeToggle>
          <Toggle>
            <Icon>
              <HiClock />
            </Icon>
            {recipe.readyInMinutes} Minutes
          </Toggle>
          <Toggle>
            <Icon>
              <GiForkKnifeSpoon />
            </Icon>
            {getFoodType()}
          </Toggle>
        </RecipeToggle>

        <RecipeFooter>
          <UpdatedDate>
            Last update:
            <p>{getCurrentDate()}</p>
          </UpdatedDate>
          <ViewDetailButton to={`/recipe/${recipe.id}`}>
            View detail <AiOutlineArrowRight />
          </ViewDetailButton>
        </RecipeFooter>
      </RecipeInformation>
      <RecipeImage src={recipe.image} />
    </Container>
  );
};

CarouselCard.propTypes = {
  recipe: PropTypes.object,
};

export default CarouselCard;
