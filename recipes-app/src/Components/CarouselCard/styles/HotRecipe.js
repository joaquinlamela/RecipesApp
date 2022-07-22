import styled from "styled-components";

import { MEDIA } from "../../../layout";

const HotRecipe = styled.div`
  display: flex;
  background: #c9c5b7;
  border-radius: 38px;
  width: 140px;
  height: 45px;
  min-height: 45px;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(10px 20px 40px rgba(41, 64, 70, 0.1));
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #000000;

  ${MEDIA.tb`
    background: #ffffff;
  `}
`;

export default HotRecipe;
