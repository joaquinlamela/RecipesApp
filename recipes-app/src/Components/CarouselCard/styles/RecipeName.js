import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeName = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  color: #000000;

  ${MEDIA.lg`
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.04em;
    align-self: center;
  `}

  ${MEDIA.xl`
    max-width: 520px;
    font-size: 56px;
    line-height: 77px;
    letter-spacing: -0.04em;
    align-self: start;
  `}

  ${MEDIA.xxl`
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.04em;
  `}
`;

export default RecipeName;
