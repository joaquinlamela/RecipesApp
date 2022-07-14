import React from "react";

import Logo from "../../Images/logo.svg";

import Nav from "./styles/Nav";
import NavbarContainer from "./styles/NavBarContainer";
import NavLogo from "./styles/NavLogo";
import NavMenu from "./styles/NavMenu";
import NavItem from "./styles/NavItem";
import NavLink from "./styles/NavLink";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} alt="App logo" />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Recetas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/random"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Recetas random
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
