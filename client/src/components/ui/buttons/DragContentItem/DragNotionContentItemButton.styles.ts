import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Button = styled.div`
  cursor: grab;
  ${dFlex.center};
  width: 18px;
  height: 24px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Button
