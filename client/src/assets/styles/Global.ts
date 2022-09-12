import { createGlobalStyle } from 'styled-components'
import ITheme from 'themes/theme.model'

const Global = createGlobalStyle<{ theme: ITheme }>`
  html, body {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: transparent;
  }

  * {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
    box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: black;
  }

  a,
  span,
  p,
  b,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${p => p.theme.colors['text-primary']};
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    background: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: ${p => p.theme.colors['scroll-track']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors['scroll-thumb']};

    &:hover {
      background: ${p => p.theme.colors['scroll-thumb-hover']};
    }
  }

  ::selection {
    background: ${p => p.theme.colors['bg-selection']};
  }
`

export default Global
