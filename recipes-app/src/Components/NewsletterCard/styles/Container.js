import styled from "styled-components";
import { MEDIA } from "../../../layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  height: 442px;
  background: #e7f9fd;
  border-radius: 60px;
  padding: 80px 0px;

  ${MEDIA.xs`
    width: 300px;
  `}

  ${MEDIA.tb`
    width: 500px;
  `}

  ${MEDIA.md`
    width: 700px;
  `}

  ${MEDIA.lg`
    width: 900px;
  `}

  ${MEDIA.xl`
    width: 1280px;
  `}
`;

export default Container;
