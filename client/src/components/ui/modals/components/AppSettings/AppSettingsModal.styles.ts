import styled from 'styled-components'
import { dFlex, modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div`
  position: relative;
  width: 45vw;
  height: 55vh;
  margin: auto;
  border-radius: 5px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  overflow: auto;
`

export const Content = styled.div`
  ${dFlex['center-col']};
  width: 100%;
  height: 100%;
  padding: 20px;
`
