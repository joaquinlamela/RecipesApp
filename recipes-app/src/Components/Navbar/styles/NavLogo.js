import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export default NavLogo;
