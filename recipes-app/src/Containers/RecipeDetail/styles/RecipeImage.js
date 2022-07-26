import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeImage = styled.img`
  display: flex;
  border-radius: 30px;

  ${MEDIA.lg`
    width: 500px;
    height: 600px;
  `}

  ${MEDIA.xl`
    width: 840px;
    height: 600px;
  `}

  ${MEDIA.xxl`
    width: 1200px;
    height: 700px;
  `}
`;

export default RecipeImage;
