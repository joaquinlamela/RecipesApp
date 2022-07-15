import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000000;
  border-radius: 16px;
  width: 180px;
  height: 60px;
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
`;

export default Button;
