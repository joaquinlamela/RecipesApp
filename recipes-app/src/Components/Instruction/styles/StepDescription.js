import styled from "styled-components";
import { MEDIA } from "../../../layout";

const StepDescription = styled.p`
  display: flex;
  text-align: justify;

  ${MEDIA.xs`
    max-width: 200px;
  `}

  ${MEDIA.sm`
    max-width: 300px;
  `}

  ${MEDIA.tb`
    max-width: 380px;
  `}

  ${MEDIA.md`
    max-width: 500px;
  `}

  ${MEDIA.lg`
    max-width: 800px;
  `}

  ${MEDIA.xl`
    max-width: 1200px;
  `}

  ${MEDIA.xxl`
    max-width: 1600px;
  `}
`;

export default StepDescription;
