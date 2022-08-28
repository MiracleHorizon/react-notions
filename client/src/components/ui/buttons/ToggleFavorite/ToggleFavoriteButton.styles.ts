import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Button = styled.div<{ isOpen?: boolean }>`
  cursor: pointer;
  ${dFlex.center};
  height: 28px;
  margin: 0 1px;
  padding: 4px 8px;
  border-radius: 3px;
  background: ${p => p.isOpen && p.theme.colors['bg-el-hover-primary']};
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg[data-svg='unfav-star'] {
    fill: ${p => p.theme.svgFills['page-settings-panel']} !important;
  }
`

export default Button
