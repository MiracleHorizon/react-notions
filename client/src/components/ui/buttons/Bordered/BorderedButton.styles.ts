import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 2px;
  padding: 6px 0;
`

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-height: 28px;
  height: 28px;
  padding: 4px 6px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const Border = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  border-bottom: 2px solid ${p => p.theme.colors['text-primary']};
`
