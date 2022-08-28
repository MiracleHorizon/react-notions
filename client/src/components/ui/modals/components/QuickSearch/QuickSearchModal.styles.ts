import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div`
  position: absolute;
  top: 100px;
  max-height: 50vh;
  min-height: 40px;
  width: 35%;
  height: 100%;
  border-radius: 5px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 50px - 28px);
  overflow: auto;
`
