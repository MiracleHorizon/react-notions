import styled from 'styled-components'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  max-height: 70vh;
  width: 220px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 2px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-modal-primary']};
  overflow: auto;

  div[data-el='option-item'] {
    padding: 10px;

    span {
      font-weight: 400;
      color: ${props => props.theme.colors['text-primary']};
    }

    svg {
      fill: ${props => props.theme.colors['text-primary']} !important;
    }
  }
`
