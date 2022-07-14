import React from "react";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Nav from "./styles/Nav";
import NavbarContainer from "./styles/NavBarContainer";
import NavLogo from "./styles/NavLogo";
import NavMenu from "./styles/NavMenu";
import NavItem from "./styles/NavItem";
import NavLink from "./styles/NavLink";
import SocialIcons from "./styles/SocialIcons";
import SocialIconLink from "./styles/SocialIconLink";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo data-end="." to="/">
            Recipeland
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
                Home
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
                Recipes
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
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <SocialIcons>
            <SocialIconLink
              href="https://www.instagram.com/octobotdev/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/channel/UCNcq-696C0mAGZIYPiMUpbw"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/company/octobot/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
