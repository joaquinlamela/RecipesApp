import styled from "styled-components";

const Nav = styled.nav`
  background: rgb(8, 105, 114);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: all 0.5s ease-in-out;
  }
`;

export default Nav;
