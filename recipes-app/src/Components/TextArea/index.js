import styled from "styled-components";

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 820px;
  height: 200px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.8;
  padding: 18px 20px;
  resize: none;

  :hover {
    border: 1px solid #ff7426;
  }

  :focus {
    outline: none;
    border: 1px solid #ff7426;
  }
`;

export default TextArea;
