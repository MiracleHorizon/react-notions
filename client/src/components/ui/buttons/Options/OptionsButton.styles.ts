import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { OptionsButtonContainerProps } from './OptionsButton.types'
import { buttonSizesHandler } from 'utils/stylesHandlers/button'
import { bgTransitions, dFlex } from 'styles/variables'

const Container = styled.div<OptionsButtonContainerProps>`
  cursor: pointer;
  position: absolute;
  ${dFlex.center};
  ${props => buttonSizesHandler(props.size)};
  border-radius: 3px;
  box-shadow: ${props =>
    props.type === 'outlined'
      ? props.theme.identifier === Theme.LIGHT
        ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
        : 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px;'
      : 'none'};
  background: ${props => props.theme.colors['bg-primary']};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-option-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-option-active']};
  }
`

export default Container
