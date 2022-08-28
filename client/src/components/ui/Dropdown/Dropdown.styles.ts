import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: max-content;
  padding: 4px 6px;
  border-radius: 3px;

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    margin-top: 3px;
  }
`

export const Title = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`
