import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 30px;

  ${MEDIA.tb`
    padding: 40px 80px;
  `}
  overflow: overlay;
`;

export default Container;
