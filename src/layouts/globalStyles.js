import { injectGlobal } from "styled-components"
import theme from "../config/theme"
import { media } from "../config/media"
import * as fonts from "../fonts"

export default injectGlobal`
  @font-face {
    font-family: "Futura-Light";
    font-weight: 300;
    src: local("Futura Light"), local("Futura-Light"),
      url(${fonts.FuturaLightTTF}) format("ttf");
  }
  @font-face {
    font-family: "Futura-Medium";
    font-weight: 500;
    src: local("Futura Medium"), local("Futura-Medium"),
      url(${fonts.FuturaMediumTTF}) format("ttf");
  }
  @font-face {
    font-family: "Futura-Book";
    font-weight: 500;
    src: local("Futura Book"), local("Futura-Book"),
      url(${fonts.FuturaBookTTF}) format("ttf");
  }
  * {
    font-family: "Futura-Light"
  }
  ul, ol, li, form {
    margin: 0;
    padding: 0;
  }
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background: ${theme.bg};
    color: ${theme.dark};
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  button, input, textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    &:focus {
      outline: none;
    }
  }
  input, textarea {
    background-color: #fafafa;
    &:focus {
      background-color: #ffffff;
    }
  }
`
