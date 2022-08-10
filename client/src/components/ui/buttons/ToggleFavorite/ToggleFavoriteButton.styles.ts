import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Container = styled.div<{ isOpen?: boolean }>`
  cursor: pointer;
  ${dFlex.center};
  height: 28px;
  margin: 0 1px;
  padding: 4px 8px;
  border-radius: 3px;
  background: ${props =>
    props.isOpen && props.theme.colors['bg-el-hover-primary']};
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  //svg {
  //  fill: ${props => props.theme.svgFills.primary} !important;
  //}
`

export default Container
