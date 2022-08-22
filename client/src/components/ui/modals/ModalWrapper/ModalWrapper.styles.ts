import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  ${dFlex['start-center']};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  user-select: none;
`

export const Inset = styled.div`
  position: absolute;
  inset: 0;
  background: ${p => p.theme.colors['modal-inset']};
  z-index: -1;
`
