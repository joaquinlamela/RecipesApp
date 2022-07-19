import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeDescription = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
  max-width: 520px;
  text-align: justify;

  ${MEDIA.tb`
    align-self: center;
    text-align: center;
    max-width: 400px;
  `}

  ${MEDIA.lg`
    max-width: 520px;
  `}

  ${MEDIA.xl`
    align-self: start;
    text-align: justify;
  `}
`;

export default RecipeDescription;
