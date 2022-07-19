import styled from "styled-components";

import { MEDIA } from "../../../layout";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA.xl`
    flex-direction: row;
  `}
`;

export default Card;
