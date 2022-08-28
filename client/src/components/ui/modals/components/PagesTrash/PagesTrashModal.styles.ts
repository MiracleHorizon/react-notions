import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div<{ sbWidth: number }>`
  position: absolute;
  left: ${p => p.sbWidth + 2}px;
  bottom: 12px;
  max-width: 100vw;
  min-width: 180px;
  min-height: 100px;
  width: 420px;
  height: 50vh;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export const InputContainer = styled.div`
  padding: 10px 12px;
`
