import styled from 'styled-components'
import SidebarStylesHandler from 'utils/stylesHandlers/sidebar'
import { SidebarWrapperProps } from './Sidebar.types'
import { Theme } from 'themes/theme.model'

export const transitionName = 'sidebar'
export const appearDuration = 600

export const Wrapper = styled.div<SidebarWrapperProps>`
  position: ${props => (!props.isOpen ? 'absolute' : 'relative')};
  min-width: ${props => (props.isOpen ? props.width : 0)}px;
  max-width: ${props => SidebarStylesHandler.setMaxWidth(props.deviceType)}px;
  width: ${props => (props.isOpen ? props.width : 0)}px;
  height: 100%;
  border-right: 1px solid
    ${props =>
      props.theme.identifier === Theme.LIGHT
        ? 'rgba(55, 53, 47, 0.09)'
        : 'rgba(255, 255, 255, 0.094)'};
  user-select: none;
  z-index: 1;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  background: ${props => props.theme.colors['bg-l-sidebar']}; //!
  transform: translateX(${props => (!props.isOpen ? -props.width - 10 : 0)}px);
  //transition: transform 0.2s ease-in;
  //width: ${props => props.width}px;

  // &.sidebar-enter {
  //   //position: absolute;
  //   //min-width: 0;
  //   position: absolute;
  //
  //   //width: 0;
  //   opacity: 0;
  //   transform: translateX(${props => -props.width}px);
  // }
  //
  // &.sidebar-enter-active {
  //   //position: absolute;
  //   position: relative;
  //   opacity: 1;
  //   transform: translateX(0);
  //   //width: ${props => props.width}px;
  //   transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  // }
  //
  // &.sidebar-exit {
  //   position: relative;
  //
  //   opacity: 1;
  //   //width: ${props => props.width}px;
  //   transform: translateX(0);
  // }
  //
  // &.sidebar-exit-active {
  //   position: absolute;
  //   //position: absolute;
  //   //min-width: 0;
  //   //width: 0;
  //   opacity: 0;
  //   transform: translateX(${props => -props.width}px);
  //   transition: opacity ${appearDuration}ms, transform ${appearDuration}ms;
  // }

  div[data-el='sb-container'] {
    box-shadow: ${props =>
      props.isResizerHovering || props.isResizingEnabled
        ? `${props.theme.colors['b-shadow-sb-resizer']} -2px 0px 0px inset`
        : 'none'};
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.3s ease-in;
`

export const ShadowDivider = styled.div`
  width: 100%;
  min-height: 1px;
  margin-top: 10px;
  box-shadow: rgb(55 53 47 / 9%) 0 -1px 0;
`
