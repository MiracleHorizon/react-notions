import styled from 'styled-components'
import { txtOflow } from 'styles/variables'

export const Container = styled.div<{ pLeft: number }>`
  width: 100%;
  height: 24px;
  padding: 2px 10px 2px ${props => props.pLeft}px;
`

export const Title = styled.p`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-secondary']};
`
