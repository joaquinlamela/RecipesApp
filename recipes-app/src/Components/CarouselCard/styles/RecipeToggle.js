import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeToggle = styled.div`
  display: flex;
  gap: 16px;

  ${MEDIA.xs`
    align-self: center;
  `}

  ${MEDIA.xl`
    align-self: start;
  `}
`;

export default RecipeToggle;
