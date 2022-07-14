import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover {
    color: #cdcdcd;
    border-bottom: 2px solid;
    border-color: #cdcdcd;
  }
`;

export default NavLink;
