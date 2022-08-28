import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 15vh;
  width: 220px;
  height: max-content;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  user-select: none;
  overflow: auto;
`

export const Content = styled.div`
  position: relative;
  height: max-content;
  max-height: 100%;
  width: 100%;
  overflow: auto;
`

export const InputContainer = styled.div`
  position: relative;
  height: 40px;
  margin: 8px 6px 0 6px;
  padding: 4px;

  input[data-input='outline'] {
    height: 28px;
  }
`
