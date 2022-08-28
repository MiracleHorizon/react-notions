import styled from 'styled-components'
import SidebarStylesHandler from 'utils/stylesHandlers/sidebar'
import { SidebarWrapperProps } from './Sidebar.types'
import { Theme } from 'themes/theme.model'

export const Wrapper = styled.div<SidebarWrapperProps>`
  position: ${p => (!p.isOpen ? 'absolute' : 'relative')};
  min-width: ${p => (p.isOpen ? p.width : 0)}px;
  max-width: ${p => SidebarStylesHandler.setMaxWidth(p.deviceType)}px;
  width: ${p => (p.isOpen ? p.width : 0)}px;
  height: 100%;
  border-right: 1px solid
    ${p => p.theme.identifier === Theme.LIGHT
        ? 'rgba(55, 53, 47, 0.09)'
        : 'rgba(255, 255, 255, 0.094)'};
  background: ${p => p.theme.colors['bg-sidebar']};
  opacity: ${p => (p.isOpen ? 1 : 0)};
  user-select: none;
  z-index: 1;
  transform: translateX(${p => (!p.isOpen ? -p.width - 10 : 0)}px);

  div[data-el='sb-container'] {
    box-shadow: ${p => p.isResizerHovering || p.isResizingEnabled
        ? `${p.theme.colors['b-shadow-sb-resizer']} -1px 0px 0px inset`
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
