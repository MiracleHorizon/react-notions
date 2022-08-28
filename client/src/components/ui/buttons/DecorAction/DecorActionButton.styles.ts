import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: max-content;
  margin-right: 2px;
  padding: 4px 6px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  svg {
    margin-right: 5px;
  }
`

export const Title = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors['text-cover-titles']};
`
