import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  max-height: 250px;
  width: 540px;
  height: max-content;
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-modal-primary']};
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  overflow: auto;
`
