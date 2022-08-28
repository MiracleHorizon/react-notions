import styled from 'styled-components'
import { ElementCoords } from 'types'
import { bgTransitions, dFlex, modalBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 250px;
  height: max-content;
  padding: 6px 4px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  z-index: 2000;
`

export const OptionsList = styled.ul`
  width: 100%;
  height: 100%;
`

export const Option = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  position: relative;
  ${dFlex['center-s-between']};
  height: 28px;
  margin: 1px 0;
  padding: 3px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'transparent'};
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    position: absolute;
    top: 50%;
    right: 8px;
    width: 14px !important;
    height: 14px !important;
    transform: translateY(-50%);
  }
`

export const OptionTitle = styled.span`
  margin-left: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-primary']};
`
