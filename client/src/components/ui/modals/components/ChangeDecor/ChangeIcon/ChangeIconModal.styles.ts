import styled from 'styled-components'
import { mobile, tablet } from 'styles/variables'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  max-width: 380px;
  width: 100%;
  max-height: 30vh;
  height: auto;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: ${props => props.theme.colors['bg-modal-primary']};
  overflow: auto;
  transform: translateX(-50%);

  @media (max-width: ${tablet}) {
    max-width: 300px;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    max-width: 250px;
  }
`
