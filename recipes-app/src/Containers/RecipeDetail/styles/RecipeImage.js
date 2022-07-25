import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeImage = styled.img`
  display: flex;
  border-radius: 30px;

  ${MEDIA.xl`
    width: 840px;
    height: 500px;
  `}

  ${MEDIA.xxl`
    width: 1100px;
    height: 700px;
  `}
`;

export default RecipeImage;
