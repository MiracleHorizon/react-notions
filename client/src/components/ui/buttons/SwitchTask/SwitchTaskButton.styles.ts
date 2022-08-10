import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  margin-right: 1px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};

  > div {
    pointer-events: ${props => (props.isActive ? 'auto' : 'none')};
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
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${props => props.theme.svgFills.secondary} !important;
  }
`
