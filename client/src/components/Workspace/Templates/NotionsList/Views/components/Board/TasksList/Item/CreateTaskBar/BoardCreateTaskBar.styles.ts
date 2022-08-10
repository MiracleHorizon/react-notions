import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 32px;
  padding-left: 5px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export default Container
