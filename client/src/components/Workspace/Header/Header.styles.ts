import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.header`
  max-width: 100vw;
  width: 100%;
  background: ${p => p.theme.colors['bg-primary']};
  user-select: none;
  z-index: 10000;
`

export const Container = styled.div`
  ${dFlex['center-s-between']};
  width: 100%;
  height: 45px;
`

export const Panel = styled.div<{ isSidebarOpen: boolean }>`
  ${dFlex['center-s-between']};
  width: 100%;
  ${p => p.isSidebarOpen && 'margin-left: 8px'};
`
