import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  max-width: 85px;
  height: 21px;
  margin-left: 12px;
  padding: 0 5px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 12px;
  line-height: 1.2;
  color: ${p => p.theme.colors['text-secondary']};
`
