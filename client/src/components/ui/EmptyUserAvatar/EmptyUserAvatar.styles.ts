import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex.center};
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  padding-bottom: 1px;
  border-radius: 3px;
  background: ${p => p.theme.colors['bg-empty-avatar']};
`

export const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors['text-empty-avatar']};
`
