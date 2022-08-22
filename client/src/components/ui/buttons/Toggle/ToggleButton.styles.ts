import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Button = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Button
