import styled from 'styled-components'
import { txtOflow } from 'styles/uiKit'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 300px;
  padding: 13px 13px 8px 13px;
  border-radius: 4px;
  box-shadow: ${p =>
    p.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${p => p.theme.colors['bg-modal-primary']};

  input {
    margin-bottom: 4px;
  }
`

export const TooltipTitle = styled.p`
  margin-top: -5px;
  font-size: 12px;
  ${txtOflow.ell};
  text-align: center;
  color: ${p => p.theme.colors['text-secondary']};
`
