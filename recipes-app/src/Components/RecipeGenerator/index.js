import React from "react";

import { axiosInstance } from "../../utils/axios";

import Container from "./styles/Container";
import Title from "./styles/Title";
import FormContainer from "./styles/FormContainer";
import ButtonGenerator from "./styles/ButtonGenerator";

const RecipeGenerator = () => {
  const requestRecipe = () => {
    const response = axiosInstance.get(
      `random?apiKey=a33d7c84ae814d97b88832b43a631a9b`
    );
    console.log(response);
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>Haz click en el botón para obtener una receta random.</Title>
          <ButtonGenerator onClick={requestRecipe}>
            Generar receta
          </ButtonGenerator>
        </FormContainer>
      </Container>
    </>
  );
};

export default RecipeGenerator;
