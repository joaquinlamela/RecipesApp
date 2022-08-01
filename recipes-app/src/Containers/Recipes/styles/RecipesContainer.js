import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipesContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-gap: 30px;

  ${MEDIA.md`
    grid-template-columns: repeat(2, 1fr);
    padding-top: 40px;
  `}

  ${MEDIA.lg`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  `}

  ${MEDIA.xl`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  `} 
  
  ${MEDIA.xxl`
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;
  `};
`;

export default RecipesContainer;
