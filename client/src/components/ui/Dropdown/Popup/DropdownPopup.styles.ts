import styled from 'styled-components'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'
import { DROPDOWN_POPUP_WIDTH } from 'utils/coordsHandlers/dropdown'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${DROPDOWN_POPUP_WIDTH}px;
  height: max-content;
  padding: 4px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px;'};
  background: ${props => props.theme.colors['bg-modal-primary']};
  z-index: 2000;
`

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0;
  padding: 3px;
  border-radius: 3px;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
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
  color: ${props => props.theme.colors['text-primary']};
`
