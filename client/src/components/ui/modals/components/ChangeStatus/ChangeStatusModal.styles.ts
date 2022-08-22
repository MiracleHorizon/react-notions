import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 250px;
  width: 538px;
  height: max-content;
  border-radius: 3px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  overflow: auto;
`
