import React from "react";
import PropTypes from "prop-types";

import Container from "./styles/Container";
import IngredientDescription from "./styles/IngredientDescription";

import { BsCheckCircleFill } from "react-icons/bs";

const Ingredient = ({ ingredient }) => {
  return (
    <Container>
      <BsCheckCircleFill />
      <IngredientDescription>{ingredient.original}</IngredientDescription>
    </Container>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.object,
};

export default Ingredient;
