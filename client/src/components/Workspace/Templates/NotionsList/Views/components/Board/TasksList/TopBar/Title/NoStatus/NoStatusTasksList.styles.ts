import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Container = styled.div`
  ${dFlex['center-start']};
  height: 100%;
  padding: 3px 4px;
  
  svg {
    fill: ${props => props.theme.colors['text-primary']} !important;
  }
`

export const Text = styled.span`
  margin-left: 6px;
  margin-bottom: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${props => props.theme.colors['text-primary']};
`
