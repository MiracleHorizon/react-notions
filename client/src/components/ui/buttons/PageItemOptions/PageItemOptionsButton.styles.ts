import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Button = styled.div`
  ${dFlex.center};
  width: 20px;
  height: 20px;
  margin-right: 2px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${p => p.theme.svgFills['page-item-option']} !important;
  }
`

export default Button
