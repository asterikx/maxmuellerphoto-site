import React from "react"
import Link from "gatsby-link"
import styled, { css } from "styled-components"
import { Margin, Padding, mr } from "styled-components-spacing"
import { NavBar, NavLink } from "./navigation"
import FaFacebook from "react-icons/lib/fa/facebook"
import FaInstagram from "react-icons/lib/fa/instagram"

const StyledFooter = styled.footer`
  height: 3.3rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  z-index: 1;
  display: flex;
  align-items: center;
`

const Copyright = styled.span``

const SocialBar = styled.ul``

const SocialLink = styled.a`
  &:not(:last-child) {
    ${mr(3)};
  }
`

const Footer = () => (
  <StyledFooter>
    <Margin left={3}>
      <Copyright>{`© ${new Date().getFullYear()} MAX MÜLLER`}</Copyright>
    </Margin>
    <Margin left={4}>
      <NavBar>
        <NavLink to="/imprint">IMPRINT</NavLink>
      </NavBar>
    </Margin>
    <Margin right={3} style={{ marginLeft: "auto" }}>
      <SocialBar>
        <SocialLink
          href="https://www.facebook.com/maxmuellerphoto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </SocialLink>
        <SocialLink>
          <FaInstagram />
        </SocialLink>
      </SocialBar>
    </Margin>
  </StyledFooter>
)
export { Footer }
