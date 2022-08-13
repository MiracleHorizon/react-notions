import styled from 'styled-components'
import SidebarStylesHandler from 'utils/stylesHandlers/sidebar'
import { ButtonContainerProps } from './ToggleSidebarButton.types'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div<ButtonContainerProps>`
  cursor: pointer;
  ${props => SidebarStylesHandler.setToggleButtonParams(props.dest)};
  ${dFlex.center};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  opacity: ${props => (props.dest !== 'open' ? (props.isHovering ? 1 : 0) : 1)};
  ${bgTransitions.esIn20 + ', opacity 0.15s ease-in-out'};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div``
