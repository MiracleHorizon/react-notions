import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div<
  ElementCoords & { isScrollOnTop: boolean; isScrollOnBottom: boolean }
>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 40vh;
  width: 220px;
  height: max-content;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  user-select: none;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-top-right-radius: ${p => (p.isScrollOnTop ? 4 : 0)}px;
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)}px;
  }
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
