import styled from 'styled-components'
import SidebarStylesHandler from 'utils/stylesHandlers/sidebar'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Button = styled.div<{
  dest: 'open' | 'close'
  isHovering: boolean
}>`
  cursor: pointer;
  ${p => SidebarStylesHandler.setToggleButtonParams(p.dest)};
  ${dFlex.center};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  opacity: ${p => (p.dest !== 'open' ? (p.isHovering ? 1 : 0) : 1)};
  ${bgTransitions.esIn20 + ', opacity 0.15s ease-in-out'};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Button
