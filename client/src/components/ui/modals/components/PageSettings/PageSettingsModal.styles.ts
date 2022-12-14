import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 70vh;
  width: 220px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 2px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  overflow: auto;

  div[data-el='option-item'] {
    padding: 10px;

    span {
      font-weight: 400;
      color: ${p => p.theme.colors['text-primary']};
    }

    svg {
      fill: ${p => p.theme.colors['text-primary']} !important;
    }
  }
`
