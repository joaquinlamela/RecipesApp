import styled from "styled-components";
import { MEDIA } from "../../../layout";

const ImageContainer = styled.div`
  display: none;
  ${(props) => props.src && `background: url(${props.src});`}
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  align-self: ${(props) => (props.start ? "start" : "end")};
  margin-top: ${(props) => (props.start ? "-15px;" : "30px")};

  ${(props) => props.start && "border-bottom-left-radius: 55px;"}

  ${MEDIA.xl`
    display: flex;
    width: 379px;
    height: 375px;
  `}
`;

export default ImageContainer;
