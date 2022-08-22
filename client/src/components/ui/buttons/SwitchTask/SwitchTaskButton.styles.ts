import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div<{ isActive: boolean }>`
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-right: 1px;
  opacity: ${p => (p.isActive ? 1 : 0.5)};

  > div {
    pointer-events: ${p => (p.isActive ? 'auto' : 'none')};
  }
`

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 100%;
  height: 100%;
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
