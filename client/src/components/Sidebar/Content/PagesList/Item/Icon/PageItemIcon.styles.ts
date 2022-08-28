import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Container = styled.div<{ locked: boolean }>`
  ${dFlex.center};
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin: 0 2px;
  border-radius: 3px;
  pointer-events: ${p => (p.locked ? 'none' : 'auto')};
  ${bgTransitions.esInOut50};

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

export default Container
