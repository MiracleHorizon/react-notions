import styled from 'styled-components'
import { dFlex, txtOflow } from 'styles/variables'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-width: 50px;
  max-width: 300px;
  margin-left: 3px;
  padding: 2px 6px;
  border-radius: 3px;
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${props => props.theme.svgFills['locked-filled']} !important;
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

export const Text = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  ${txtOflow.ell};
  color: inherit;
`

export const Locked = styled.span`
  margin-left: 3px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.colors['text-secondary']};
`
