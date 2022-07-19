import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeName = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  max-width: 520px;
  color: #000000;

  ${MEDIA.xl`
    font-size: 56px;
    line-height: 77px;
    letter-spacing: -0.04em;
  `}

  ${MEDIA.xxl`
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.04em;
  `}
`;

export default RecipeName;
