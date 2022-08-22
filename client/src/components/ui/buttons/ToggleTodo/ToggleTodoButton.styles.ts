import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'

const Button = styled.div<{
  isActive: boolean
  squareColor: NotionContentItemColorsEnum
}>`
  cursor: pointer;
  ${dFlex.center};
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background: ${p => (p.isActive ? 'rgb(46, 170, 220)' : 'transparent')};
  background: ${p => !p.isActive && p.theme.colors['bg-el-hover-primary']};
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => !p.isActive && p.theme.colors['bg-el-active-primary']};
  }

  svg[data-svg='check'] {
    width: 12px !important;
    height: 12px !important;
    fill: white !important;
  }

  svg[data-svg='checkbox-square'] {
    fill: ${p => ContentItemColorsHandler.setColor(p.squareColor, p.theme)} !important;
  }
`

export default Button
