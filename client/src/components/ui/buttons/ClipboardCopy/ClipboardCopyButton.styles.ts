import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

const Button = styled.div`
  position: absolute;
  cursor: pointer;
  ${dFlex.center};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  box-shadow: ${p =>
    p.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
      : 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px'};
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${p => p.theme.identifier === Theme.LIGHT
        ? p.theme.svgFills.primary
        : p.theme.svgFills.secondary} !important;
  }
`

export default Button
