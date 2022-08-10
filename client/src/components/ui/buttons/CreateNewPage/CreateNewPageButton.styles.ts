import styled from 'styled-components'
import { ElementCoords } from 'types'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Container = styled.div<{ coords?: ElementCoords; absolute?: boolean }>`
  cursor: pointer;
  ${props =>
    props.absolute &&
    `position: absolute;
     top: ${props.coords?.top};
     bottom: ${props.coords?.bottom};
     left: ${props.coords?.left};
     right: ${props.coords?.right};
  `};
  ${dFlex.center};
  width: 20px;
  height: 20px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    width: 14px !important;
    height: 100% !important;
    margin-right: 1px;
    fill: ${props => props.theme.svgFills['page-item-option']} !important;
  }
`

export default Container
