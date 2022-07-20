import styled from "styled-components";
import { MEDIA } from "../../../layout";

const FormContainer = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 24px;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  height: 120px;

  ${MEDIA.tb`
    flex-direction: row;
    height: 60px;
  `}

  ${MEDIA.lg`
    height: 80px;
  `}
`;

export default FormContainer;
