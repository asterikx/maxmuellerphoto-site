import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { ml } from "styled-components-spacing"

const activeClassName = "active-link"

const NavBar = ({ children, ...props }) => (
  <nav {...props}>
    <ul>{children}</ul>
  </nav>
)

const NavLink = styled(Link).attrs({
  exact: true, // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md#exact-bool
  activeClassName,
})`
  &:not(:first-child) {
    ${ml(4)};
  }
  &.${activeClassName} {
    color: ${props => props.theme.primary};
  }
`

export { NavBar, NavLink }
