import styled from 'styled-components'
import { OutlineButtonContainerProps } from './OutlineButton.types'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'

const Button = styled.div<OutlineButtonContainerProps>`
  cursor: pointer;
  ${dFlex.center};
  width: 100%;
  height: 32px;
  margin-top: 8px;
  border: 1px solid ${p => p.brColor};
  border-radius: 4px;
  user-select: none;
  ${p => p.disabled && 'pointer-events: none; opacity: 0.5'};
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.hover};
  }

  &:active {
    background: ${p => p.active};
  }

  p {
    margin-bottom: 1px;
    font-size: 14px;
    ${txtOflow.ell};
    color: ${p => p.color};
  }
`

export default Button
