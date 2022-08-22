import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  height: 20px;
  padding: 0 4px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.div`
  font-size: 12px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-secondary']};
`
