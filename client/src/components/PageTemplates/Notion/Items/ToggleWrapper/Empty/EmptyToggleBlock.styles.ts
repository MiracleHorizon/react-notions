import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 30px;
  margin-top: 8px;
  margin-left: -2px;
  padding: 3px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};
  z-index: 1;

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-secondary']};
`
