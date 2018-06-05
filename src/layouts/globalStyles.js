import { injectGlobal } from 'styled-components'
import theme from '../config/theme'
import { media } from '../config/media'
import * as fonts from '../fonts'

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
  ul {
    margin: 0;
    padding: 0;
  }
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
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
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`
