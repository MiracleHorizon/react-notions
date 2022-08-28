import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start']};
  max-width: 300px;
  min-width: 50px;
`

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  max-width: 130px;
  min-width: 50px;
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
`

export const Icon = styled.img`
  min-width: 20px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

export const Value = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  ${txtOflow.ell};
  color: inherit;
`

export const TitlesDivider = styled.div`
  ${dFlex.center};
  width: 10px;
  height: 45px;
  margin-left: 3px;
  color: ${p => p.theme.colors['text-secondary']};
`
