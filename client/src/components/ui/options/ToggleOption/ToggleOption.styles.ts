import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-s-between']};
  height: 28px;
  margin: 1px 4px;
  padding: 0 10px;
  border-radius: 3px;

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`
