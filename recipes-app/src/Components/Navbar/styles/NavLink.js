import styled from "styled-components";

const NavLink = styled.a`
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
