import styled from 'styled-components'
import SidebarStylesHandler from 'utils/stylesHandlers/SidebarStylesHandler'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

const Button = styled.div<{
  dest: 'open' | 'close'
  isSidebarHovering: boolean
}>`
  cursor: pointer;
  ${p => SidebarStylesHandler.setToggleButtonParams(p.dest)};
  ${dFlex.center};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  opacity: ${p => (p.dest !== 'open' ? (p.isSidebarHovering ? 1 : 0) : 1)};
  fill: ${p => p.theme.identifier === Theme.LIGHT
      ? p.theme.svgFills.primary
      : p.theme.svgFills.secondary};
  ${bgTransitions.esIn20 + ', opacity 0.15s ease-in-out'};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Button
