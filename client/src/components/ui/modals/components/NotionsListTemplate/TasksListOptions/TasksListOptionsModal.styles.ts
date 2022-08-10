import styled from 'styled-components'
import { dFlex, mobile } from 'styles/uiKit'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const transitionName = 'modal'
export const appearDuration = 750

const Container = styled.div<{
  coords: ElementCoords
  template: 'default' | 'taskModal'
}>`
  position: absolute;
  top: ${props => props.coords.top}px;
  left: ${props => props.coords.left}px;
  ${dFlex.center};
  flex-direction: column;
  min-height: 40px;
  width: ${props => (props.template === 'default' ? 180 : 220)}px;
  height: auto;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px;'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px;'};
  background: ${props => props.theme.colors['bg-modal-primary']};
  overflow-y: auto;

  &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.modal-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    top: 6%;
    max-height: 300px;
  }

  div[data-el='option-item'] {
    padding: 0 6px;

    span {
      font-weight: 400;
      color: ${props => props.theme.colors['text-primary']};
    }

    svg {
      fill: ${props => props.theme.colors['text-primary']} !important;
    }
  }
`

export default Container
