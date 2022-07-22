import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  ${MEDIA.xs`
    padding: 20px;
    gap: 25px;
  `}

  ${MEDIA.tb`
    gap: 15px;
    padding: 30px 40px 20px;
  `}

  ${MEDIA.lg`
    gap: 15px;
  `}

  ${MEDIA.xl`
    gap: 26px;
    padding: 50px;
    width: 550px;
  `}

  ${MEDIA.xxl`
    width: 580px;
  `}
`;

export default RecipeInformation;
