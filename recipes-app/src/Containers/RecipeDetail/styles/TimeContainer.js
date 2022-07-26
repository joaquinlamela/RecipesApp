import styled from "styled-components";
import { MEDIA } from "../../../layout";

const TimeContainer = styled.div`
  display: none;

  ${MEDIA.tb`
    display: flex;
    gap: 32px;
  `}
`;

export default TimeContainer;
