import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'
import { ElementCoords } from 'types'

const Wrapper = styled.div<
  ElementCoords & { isScrollOnTop: boolean; isScrollOnBottom: boolean }
>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 320px;
  min-height: 20vh;
  max-height: 45vh;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  z-index: 1000;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-top-right-radius: ${p => (p.isScrollOnTop ? 4 : 0)};
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)};
  }
`

export default Wrapper
