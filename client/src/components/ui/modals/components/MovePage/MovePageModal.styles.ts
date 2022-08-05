import styled from 'styled-components'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  left: ${props => props.left}px;
  max-height: 70vh;
  width: 220px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-modal-primary']};
  user-select: none;
`

export const Content = styled.div`
  flex: 1;
  overflow: hidden auto;
`

export const InputContainer = styled.div`
  margin: 8px 6px 0 6px;
  padding: 4px;
`

export const List = styled.ul`
  margin-bottom: 1px;
  padding: 4px;
`
