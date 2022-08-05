import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  max-height: 70vh;
  width: 300px;
  height: max-content;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px;'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px;'};
  background: ${props => props.theme.colors['bg-modal-primary']};
  transform: translateX(-50%);
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
    background: ${props => props.theme.colors['bg-modal-primary']};
  }
`

export const List = styled.ul`
  max-height: calc(50vh - 100px);
  width: 100%;
  margin-top: 4px;
  padding: 5px 10px 8px 10px;
  overflow: auto;
`
