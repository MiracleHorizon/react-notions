import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Button = styled.div`
  cursor: grab;
  ${dFlex.center};
  width: 24px;
  height: 24px;
  margin-right: 1px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    width: 18px !important;
    height: 18px !important;
  }
`

export default Button
