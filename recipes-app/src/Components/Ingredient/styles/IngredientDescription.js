import styled from "styled-components";
import { MEDIA } from "../../../layout";

const IngredientDescription = styled.p`
  display: flex;
  text-align: justify;

  ${MEDIA.xl`
    max-width: 1200px;
  `}

  ${MEDIA.xxl`
    max-width: 1600px;
  `}
`;

export default IngredientDescription;
