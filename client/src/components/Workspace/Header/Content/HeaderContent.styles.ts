import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Container = styled.div<{ isSidebarOpen: boolean }>`
  ${dFlex['center-s-between']};
  width: 100%;
  ${p => p.isSidebarOpen && 'margin-left: 8px'};
`

export default Container
