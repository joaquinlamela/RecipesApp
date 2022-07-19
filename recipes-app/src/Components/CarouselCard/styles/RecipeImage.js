import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeImage = styled.img`
  display: flex;

  ${MEDIA.xl`
    max-width: 450px;
    height: 570px;
  `}

  ${MEDIA.xxl`
    max-width: 620px;
    height: 640px;
  `}
`;

export default RecipeImage;
