import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Wrapper = styled.div`
  ${dFlex['start-center']}
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const Title = styled.span`
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors['text-cover-titles']};
`

export const Content = styled.div`
  ${dFlex['center-start']}
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
