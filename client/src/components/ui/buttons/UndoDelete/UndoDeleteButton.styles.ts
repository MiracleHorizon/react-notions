import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 50px;
  height: 24px;
  margin-left: 5px;
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors['text-ttip-title']};
`
