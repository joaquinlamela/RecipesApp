import styled from "styled-components";

const ButtonGenerator = styled.button`
  background: rgb(8, 105, 114);
  border: 1px solid rgb(8, 105, 114);
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  padding: 0px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  &:hover {
    background: rgb(0, 61, 66);
    border: 1px solid rgb(0, 61, 66);
  }
  cursor: pointer;
  margin-top: auto;
`;

export default ButtonGenerator;
