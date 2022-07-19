import styled from "styled-components";

const ImageContainer = styled.div`
  ${(props) => props.src && `background: url(${props.src});`}
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  align-self: ${(props) => (props.start ? "start" : "end")};
  margin-top: ${(props) => (props.start ? "-15px;" : "30px")};
  width: 379px;
  height: 375px;
  ${(props) => props.start && "border-bottom-left-radius: 55px;"}
`;

export default ImageContainer;
