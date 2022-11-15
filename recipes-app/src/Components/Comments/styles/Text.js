import styled from "styled-components";

const Text = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => (props.dark ? "#000000" : "rgba(0, 0, 0, 0.6)")};
  ${(props) => props.alignSelf && `align-self: center;`}
`;

export default Text;
