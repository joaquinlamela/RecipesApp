import styled from "styled-components";
import { MEDIA } from "../../layout";

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 77px;
  letter-spacing: -0.04em;
  color: #000000;

  ${MEDIA.xs`
    font-size: ${(props) => (props.small ? "22px" : "40px")};
  `}

  ${MEDIA.tb`
    font-size: ${(props) => (props.small ? "36px" : "48px")};
  `}

  ${MEDIA.md`
    font-size: ${(props) => (props.small ? "42px" : "56px")};
  `}

  ${MEDIA.lg`
    font-size: ${(props) => (props.small ? "48px" : "56px")};
  `}
`;

export default Title;
