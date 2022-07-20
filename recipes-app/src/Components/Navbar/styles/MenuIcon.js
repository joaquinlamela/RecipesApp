import styled from "styled-components";
import { MEDIA } from "../../../layout";

const MenuIcon = styled.div`
  display: flex;
  align-self: center;

  ${MEDIA.tb`
    display: none;
  `}
`;

export default MenuIcon;
