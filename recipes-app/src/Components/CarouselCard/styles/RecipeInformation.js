import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  ${MEDIA.lg`
    gap: 15px;
    padding: 30px 40px 20px;
  `}

  ${MEDIA.xl`
    gap: 26px;
    padding: 50px;
  `}
`;

export default RecipeInformation;
