import styled from "styled-components";

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  overflow: hidden;
`;

export default RecipesContainer;
