import styled from "styled-components";
import { MEDIA } from "../../../layout";

const FormContainer = styled.div`
  display: flex;
  height: 80px;
  background: #ffffff;
  border-radius: 24px;
  align-items: center;
  padding: 10px;

  ${MEDIA.md`
    height: 60px;
  `}

  ${MEDIA.lg`
    height: 80px;
  `}
`;

export default FormContainer;
