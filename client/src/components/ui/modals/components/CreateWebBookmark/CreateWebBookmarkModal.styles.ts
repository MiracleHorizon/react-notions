import styled from 'styled-components'
import { modalBoxShadowPrimary, txtOflow } from 'assets/styles/uiKit'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 300px;
  padding: 13px 13px 8px 13px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
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
