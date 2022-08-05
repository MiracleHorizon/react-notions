import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/variables'

const Container = styled.div`
  ${dFlex.center};
  width: 32px;
  height: 100%;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export default Container
