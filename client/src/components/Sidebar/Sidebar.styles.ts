import styled from 'styled-components'
import { SidebarWrapperProps } from './Sidebar.types'
import { SidebarStylesHandler } from 'utils/stylesHandlers/sidebar'
import stylesHandler from 'utils/stylesHandlers/sidebar'

export const Wrapper = styled.div<SidebarWrapperProps>`
  position: ${props => stylesHandler.setPosition(props.location, props.isOpen)};
  ${props => props.location === 'right' && 'right: 0px'};
  min-width: ${props => (props.isOpen ? props.width : 0)}px;
  max-width: ${props => stylesHandler.setMaxWidth(props)}px;
  width: ${props => (props.isOpen ? props.width : 0)}px;
  height: 100%;
  ${props => SidebarStylesHandler.setBorder(props.location, props.theme)};
  user-select: none;
  z-index: 1;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  background: ${props => stylesHandler.setBackground(props, props.theme)};
  transform: translateX(${props => stylesHandler.setTranslateX(props)}px);

  div[data-el='sb-container'] {
    box-shadow: ${props => stylesHandler.setBoxShadow(props, props.theme)};
  }
`

// min-width: ${props => stylesHandler.setMinWidth(props)}px;

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
