import styled from "styled-components";

const Loading = styled.div`
  height: 500px;
  width: 250px;
  position: relative;

  > svg {
    transform: translate(-50%, -50%) scale(1.45) !important;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export default Loading;
