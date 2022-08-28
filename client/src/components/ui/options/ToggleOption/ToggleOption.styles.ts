import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  ${dFlex['center-s-between']};
  height: 28px;
  margin: 1px 4px;
  padding: 0 10px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'transparent'};
  

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`
