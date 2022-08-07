import styled from 'styled-components'
import { mobile, tablet } from 'styles/variables'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<{
  coords: ElementCoords
  activeCategory: string
}>`
  position: absolute;
  top: ${props => props.coords.top}px;
  left: ${props => props.coords.left}px;
  max-width: 540px;
  max-height: 45vh;
  min-height: 200px;
  width: 100%;
  height: ${props => (props.activeCategory === 'Gallery' ? '100%' : 'auto')};
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-modal-primary']};

  @media (max-width: ${tablet}) {
    max-width: 400px;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    max-width: 300px;
  }
`
