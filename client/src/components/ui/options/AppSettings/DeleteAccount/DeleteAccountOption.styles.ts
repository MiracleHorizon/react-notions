import styled from 'styled-components'
import { txtOflow } from 'assets/styles/uiKit'

export const Container = styled.div`
  width: 100%;
  padding: 14px 0;

  div[data-btn='outline'] {
    max-width: 140px;
    margin-top: 12px;
  }
`

export const Title = styled.h4`
  max-width: 80%;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 400;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
