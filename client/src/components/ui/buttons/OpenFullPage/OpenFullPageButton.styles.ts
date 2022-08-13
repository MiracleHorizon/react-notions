import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 24px;
  height: 24px;
  margin-right: 1px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${p => p.theme.svgFills.secondary} !important;
  }
`

export default Container
