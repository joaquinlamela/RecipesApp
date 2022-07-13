import styled from "styled-components";
import { MEDIA } from "../../../layout";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

  ${MEDIA.xxl`
    max-width: 1500px;
  `}
`;

export default NavbarContainer;
