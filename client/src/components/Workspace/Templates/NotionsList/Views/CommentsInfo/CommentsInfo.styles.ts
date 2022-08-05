import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Container = styled.div<{ padding?: boolean }>`
  ${dFlex['center-start']};
  width: 100%;
  ${props =>
    props.padding
      ? 'padding: 0 10px 6px 10px;'
      : `padding-top: 5px; 
         padding-left: 1px;
      `};
`

export const Count = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors['text-secondary']};
`
