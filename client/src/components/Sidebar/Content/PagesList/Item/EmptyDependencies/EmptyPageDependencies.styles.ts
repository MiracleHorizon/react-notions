import styled from 'styled-components'
import { txtOflow } from 'assets/styles/uiKit'

export const Container = styled.div<{ pLeft: number }>`
  width: 100%;
  height: 24px;
  padding: 2px 10px 2px ${p => p.pLeft}px;
  user-select: none;
`

export const Title = styled.p`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-secondary']};
`
