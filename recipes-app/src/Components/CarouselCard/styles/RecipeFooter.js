import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeFooter = styled.div`
  display: flex;
  height: 60px;

  ${MEDIA.tb`
    margin-top: 20px;
  `}

  ${MEDIA.lg`
    margin-top: auto;
  `}
`;

export default RecipeFooter;
