import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import FooterContainer from "./styles/FooterContainer";
import AppInfo from "./styles/AppInfo";
import LogoContainer from "./styles/LogoContainer";
import AppDescription from "./styles/AppDescription";
import SocialInfo from "./styles/SocialInfo";
import SocialIcons from "../Navbar/styles/SocialIcons";
import SocialIconLink from "../Navbar/styles/SocialIconLink";

import NavLogo from "../Navbar/styles/NavLogo";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <AppInfo>
        <LogoContainer>
          <NavLogo data-end="." to="/" onClick={toggleHome}>
            Recipeland
          </NavLogo>
          <AppDescription>Your new recipe book, easy and simple</AppDescription>
        </LogoContainer>
      </AppInfo>
      <SocialInfo>
        Recipeland © {new Date().getFullYear()} All rights reserved.
        <SocialIcons left>
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
      </SocialInfo>
    </FooterContainer>
  );
};

export default Footer;
