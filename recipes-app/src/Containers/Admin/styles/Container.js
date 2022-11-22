import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 30px;

  ${MEDIA.md`
    padding: 40px 80px;
    align-items: initial;
  `}

  ${MEDIA.lg`
    padding: 40px 40px;
  `}

  ${MEDIA.xl`
    padding: 40px 80px;
  `}
  overflow: overlay;
`;

export default Container;
