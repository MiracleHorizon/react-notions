import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-width: 50px;
  max-width: 300px;
  margin-left: 3px;
  padding: 2px 6px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${p => p.theme.svgFills['locked-filled']} !important;
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
  color: ${p => p.theme.colors['text-secondary']};
`

export const TitlesDivider = styled.div`
  ${dFlex.center};
  height: 45px;
  width: 10px;
  margin-left: 3px;
  color: ${p => p.theme.colors['text-secondary']};
`
