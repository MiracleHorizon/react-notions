import styled from 'styled-components'
import { txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 130px;
  padding: 10px 13px;
`

export const Description = styled.p`
  margin: 0 auto;
  font-size: 12px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-cover-titles']};
`
