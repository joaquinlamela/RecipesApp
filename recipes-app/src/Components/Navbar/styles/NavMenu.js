import styled from "styled-components";

import { MEDIA } from "../../../layout";

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  ${MEDIA.xs`
    display: none;
  `}

  ${MEDIA.tb`
    display: flex;
  `}
`;

export default NavMenu;
