import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  min-height: 90px;
  max-height: 40vh;
  width: 220px;
  height: 100%;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  user-select: none;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
`

export const InputContainer = styled.div`
  position: relative;
  height: 40px;
  margin: 8px 6px 0 6px;
  padding: 4px;

  input[data-input='outline'] {
    height: 28px;
    line-height: 28px;
  }
`
