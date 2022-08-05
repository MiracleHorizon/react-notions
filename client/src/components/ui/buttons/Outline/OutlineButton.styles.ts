import styled from 'styled-components'
import { OutlineButtonContainerProps } from './OutlineButton.types'
import { bgTransitions, dFlex, txtOflow } from 'styles/variables'

const Button = styled.div<OutlineButtonContainerProps>`
  cursor: pointer;
  ${dFlex.center};
  width: 100%;
  height: 32px;
  margin-top: 8px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 4px;
  user-select: none;
  ${bgTransitions.esIn20};
  ${props => props.disabled && 'pointer-events: none; opacity: 0.5'};

  &:hover {
    background: ${props => props.hoverColor};
  }

  &:active {
    background: ${props => props.activeColor};
  }

  p {
    margin-bottom: 1px;
    font-size: 14px;
    line-height: 24px;
    ${txtOflow.ell};
    color: ${props => props.color};
  }
`

export default Button
