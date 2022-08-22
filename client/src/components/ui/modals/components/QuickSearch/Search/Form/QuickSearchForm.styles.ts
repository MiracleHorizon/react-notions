import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { Theme } from 'themes/theme.model'

export const Form = styled.form`
  position: relative;
  ${dFlex['center-start']};
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-shadow: rgb(
      ${p => (p.theme.identifier === Theme.LIGHT ? '55 53 47' : '255 255 255')} /
        9%
    )
    0 1px 0;

  div[data-btn='clear-input'] {
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  
  svg {
    fill: ${p => p.theme.svgFills.secondary} !important;
  }
`
