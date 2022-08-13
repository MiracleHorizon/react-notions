import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'styles/uiKit'
import { ElementCoords } from 'types'

const Wrapper = styled.div<ElementCoords>`
  position: absolute;
  top: 45%;
  right: 50%;
  width: 320px;
  min-height: 20vh;
  max-height: 40vh;
  padding: 6px 0;
  border-radius: 3px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  z-index: 1000;
  overflow: auto;
`

export default Wrapper
