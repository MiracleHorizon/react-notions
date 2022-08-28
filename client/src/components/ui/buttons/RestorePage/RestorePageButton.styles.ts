import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Button = styled.div`
  ${dFlex.center};
  width: 32px;
  height: 100%;
  margin-right: 1px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Button
