import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-width: 18px;
  width: auto;
  height: 29px;
  padding: 0 7px;
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
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-secondary']};
`
