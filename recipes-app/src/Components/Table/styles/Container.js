import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 30px;
  background: #e7fafe;
  padding: 32px;

  ${MEDIA.xl`
    width: 400px;
    height: 500px;
  `}

  ${MEDIA.xxl`
    width: 400px;
    height: 700px;
  `}
`;

export default Container;
