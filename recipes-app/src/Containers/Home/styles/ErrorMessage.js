import styled from "styled-components";
import { MEDIA } from "../../../layout";

const ErrorMessage = styled.h2`
  font-family: "Inter";
  font-weight: 600;
  color: #e60f36;
  letter-spacing: -0.04em;
  font-size: 20px;
  line-height: 50px;
  align-self: center;

  ${MEDIA.xs`
    max-width: 280px;
    text-align: center;
  `}

  ${MEDIA.sm`
    max-width: 340px;
  `}

  ${MEDIA.tb`
    max-width: 500px;
  `}

  ${MEDIA.lg`
    max-width: 900px;
    text-align: justify;
  `}
`;

export default ErrorMessage;
