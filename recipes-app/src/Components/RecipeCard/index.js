import React from "react";

import PropTypes from "prop-types";

import Container from "./styles/Container";
import StyledImage from "./styles/StyledImage";
import StyledTitle from "./styles/StyledTitle";
import StyledToggle from "./styles/StyledToggle";
import ToggleContainer from "./styles/ToggleContainer";

import { HiClock } from "react-icons/hi";
import { GiForkKnifeSpoon } from "react-icons/gi";

const RecipeCard = ({ image, name, time, type, id }) => {
  return (
    <Container to={`/recipe/${id}`}>
      <StyledImage src={image} />
      <StyledTitle>{name}</StyledTitle>
      <ToggleContainer>
        <StyledToggle>
          <HiClock />
          {time} Minutes
        </StyledToggle>
        <StyledToggle>
          <GiForkKnifeSpoon />
          {type}
        </StyledToggle>
      </ToggleContainer>
    </Container>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.number,
  type: PropTypes.string,
};

export default RecipeCard;
