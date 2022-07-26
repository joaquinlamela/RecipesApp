import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${MEDIA.lg`
    flex-direction: row;
  `}
`;

export default RecipeDetailContainer;
