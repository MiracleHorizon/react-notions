import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-s-between']};
  margin-right: 3px;
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

export const Title = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${p => p.theme.colors['text-secondary']};
`
