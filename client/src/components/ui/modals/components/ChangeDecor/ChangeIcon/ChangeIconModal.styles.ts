import styled from 'styled-components'
import { mobile, tablet } from 'styles/uiKit'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const transitionName = 'iconModal'
export const appearDuration = 250

const Container = styled.div<{
  coords: ElementCoords
  activeCategory: string
}>`
  position: absolute;
  top: ${props => props.coords.top}px;
  left: ${props => props.coords.left}px;
  max-width: 380px;
  max-height: 30vh;
  min-height: 200px;
  width: 100%;
  height: ${props => (props.activeCategory === 'Emoji' ? '100%' : 'auto')};
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px,rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-modal-primary']};

  &.${transitionName}-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }

  @media (max-width: ${tablet}) {
    max-width: 300px;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    max-width: 250px;
  }
`

export default Container
