import styled from "styled-components";

const ViewDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  border-radius: 16px;
  width: 180px;
  height: 60px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  svg {
    font-size: 17px;
    margin-left: 20px;
  }
  margin-left: auto;
  cursor: pointer;
  :hover {
    background: #ff7426;
  }
`;

export default ViewDetailButton;
