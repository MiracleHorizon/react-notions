import styled from 'styled-components'
import { ElementCoords } from 'types'
import { modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 70vh;
  width: 300px;
  height: max-content;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export const TopBarContainer = styled.div`
  padding: 8px 12px;

  input[data-input='outline'] {
    margin-top: 5px;
    height: 28px;
  }

  div[data-btn='clear-input'] {
    top: 12px;
  }

  div[data-btn='options'] {
    background: ${p => p.theme.colors['bg-modal-primary']};
  }
`

export const List = styled.ul`
  max-height: calc(50vh - 100px);
  width: 100%;
  margin-top: 4px;
  padding: 5px 10px 8px 10px;
  overflow: auto;
`
