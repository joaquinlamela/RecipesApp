import styled from "styled-components";
import { MEDIA } from "../../layout";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000000;
  border-radius: 16px;
  width: 160px;
  height: 45px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  svg {
    font-size: 17px;
    margin-left: 10px;
  }
  cursor: pointer;
  :hover {
    background: #ff7426;
  }

  ${MEDIA.md`
    height: 50px;
    width: 180px;
    border-radius: 16px;
  `}

  ${MEDIA.lg`
    height: 60px;
    width: 180px;
  `}
`;

export default Button;
