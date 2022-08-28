import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { OptionsButtonContainerProps } from './OptionsButton.types'
import { buttonSizesHandler } from 'utils/stylesHandlers/button'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'
import ReactTransitionGroup from '../../../../libs/react-transition-group'

export const appearDuration = 350

const Button = styled.div<OptionsButtonContainerProps>`
  cursor: pointer;
  position: absolute;
  ${dFlex.center};
  ${p => buttonSizesHandler(p.size)};
  border-radius: 3px;
  box-shadow: ${p =>
    p.type === 'outlined'
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
