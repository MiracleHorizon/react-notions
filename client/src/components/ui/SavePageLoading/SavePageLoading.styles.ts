import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex['center-s-between']}
  height: 100%;
  margin-left: 5px;
`

export const Title = styled.span`
  margin-left: 6px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-secondary']};
`
