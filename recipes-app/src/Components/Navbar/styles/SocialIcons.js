import styled from "styled-components";

import { MEDIA } from "../../../layout";

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  ${(props) =>
    props.left &&
    `
    margin-left: auto;
  `}

  ${MEDIA.xs`
    display: none;
  `}

  ${MEDIA.lg`
    display: flex;
  `}
`;
export default SocialIcons;
