import styled from 'styled-components'
import { ElementCoords } from 'types'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Button = styled.div<{ coords?: ElementCoords; absolute?: boolean }>`
  cursor: pointer;
  ${p => p.absolute &&
    `position: absolute;
     top: ${p.coords?.top};
     bottom: ${p.coords?.bottom};
     left: ${p.coords?.left};
     right: ${p.coords?.right};
  `};
  ${dFlex.center};
  width: 20px;
  height: 20px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    width: 14px !important;
    height: 100% !important;
    margin-right: 1px;
    fill: ${p => p.theme.svgFills['page-item-option']} !important;
  }
`

export default Button
