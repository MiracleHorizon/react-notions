import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/variables'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: max-content;
  margin-right: 2px;
  padding: 4px 6px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    margin-right: 5px;
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors['text-cover-titles']};
`
