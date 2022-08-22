import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex['center-s-between']};
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  padding: 4px;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Title = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`

export const Description = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors['text-option-primary']};
`
