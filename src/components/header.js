import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Margin, Padding } from 'styled-components-spacing'
import { NavBar, NavLink } from './navigation'

const Logo = styled.img`
  display: block;
  height: 28px;
  margin: 0;
  flex-shrink: 0;
`

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: ${props => props.theme.secondary};
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <StyledHeader>
    <Margin left={3}>
      <Logo src="/logo.svg" alt="logo" />
    </Margin>
    <Margin right={3} top={3}>
      <NavBar>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/galleries">GALLERY</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </NavBar>
    </Margin>
  </StyledHeader>
)

export { Header }