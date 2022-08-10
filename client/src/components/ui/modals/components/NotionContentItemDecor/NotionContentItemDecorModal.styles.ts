import styled from 'styled-components'
import { ElementCoords } from 'types'
import { dFlex, modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 70vh;
  min-height: 40vh;
  width: 220px;
  height: max-content;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  overflow: auto;
`

export const OptionsList = styled.ul`
  ${dFlex['center-col']};

  h4[data-el='modal-title'] {
    margin-top: 5px;
    margin-left: 14px;
  }
`
