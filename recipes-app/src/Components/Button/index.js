import styled from "styled-components";
import { MEDIA } from "../../layout";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${(props) => (props.disabled ? "#b8b9ba" : "#000000")};
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

  ${(props) => props.alignSelf && `align-self: center;`}

  svg {
    font-size: 17px;
    margin-left: 10px;
  }

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :hover {
    background: ${(props) => (props.disabled ? "#6e6c6b" : "#ff7426")};
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
