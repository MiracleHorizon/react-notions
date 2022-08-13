import styled from 'styled-components'
import { ElementCoords } from 'types'
import { bgTransitions, dFlex, modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 200px;
  height: max-content;
  padding: 4px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  z-index: 2000;
`

export const Option = styled.div`
  cursor: pointer;
  ${dFlex['center-s-between']};
  margin: 1px 0;
  padding: 3px;
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
    height: 14px !important;
    margin-top: 2px;
    margin-right: 8px;
  }
`

export const OptionTitle = styled.span`
  margin-left: 8px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`
