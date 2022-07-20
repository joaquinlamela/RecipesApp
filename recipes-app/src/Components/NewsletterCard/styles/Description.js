import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Description = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);

  ${MEDIA.md`
    max-width: 400px;
  `}

  ${MEDIA.lg`
    max-width: 800px;
  `}
`;

export default Description;
