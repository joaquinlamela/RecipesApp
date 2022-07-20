import styled from "styled-components";
import { MEDIA } from "../../../layout";

const RecipeName = styled.h1`
  font-family: "Inter";
  font-weight: 600;
  color: #000000;
  letter-spacing: -0.04em;

  ${MEDIA.tb`
    font-size: 40px;
    line-height: 50px;
    align-self: center;
  `}

  ${MEDIA.md`
    font-size: 30px;
    line-height: 70px;
    align-self: center;
  `}

  ${MEDIA.lg`
    font-size: 42px;
    line-height: 52px;
    align-self: center;
  `}

  ${MEDIA.xl`
    max-width: 520px;
    font-size: 56px;
    line-height: 77px;
    align-self: start;
  `}

  ${MEDIA.xxl`
    font-size: 64px;
  `}
`;

export default RecipeName;
