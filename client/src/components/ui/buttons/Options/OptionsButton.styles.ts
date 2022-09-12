import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { OptionsButtonContainerProps } from './OptionsButton.types'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'
import { TButtonSize } from 'types'
import ReactTransitionGroup from 'libs/react-transition-group'

export const appearDuration = 350

const Button = styled.div<OptionsButtonContainerProps>`
  cursor: pointer;
  position: absolute;
  ${dFlex.center};
  ${p => buttonSizesHandler(p.size)};
  border-radius: 3px;
  box-shadow: ${p => p.type === 'outlined'
      ? p.theme.identifier === Theme.LIGHT
        ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
        : 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px;'
      : 'none'};
  background: ${p => p.theme.colors['bg-option-btn']};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-option-hover']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-option-active']};
  }

  ${ReactTransitionGroup.setDefaultAnimation(appearDuration)};
`

export default Button

const buttonSizesHandler = (size: TButtonSize): string => {
  let width = 24,
    height = 24

  switch (size) {
    case 'small':
      width = 18
      height = 18
      break
    case 'medium':
      width = 24
      height = 24
      break
    case 'large':
      width = 28
      height = 28
      break
  }

  return `
    width: ${width}px;
    height: ${height}px
  `
}
