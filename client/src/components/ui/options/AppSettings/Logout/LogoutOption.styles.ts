import styled from 'styled-components'
import { dFlex, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px 0;

  div[data-btn='outline'] {
    max-width: 75px;
    margin-top: 12px;
  }
`

export const Container = styled.div`
  flex: 1;
  ${dFlex['start-center-col']};

  h4,
  p {
    max-width: 80%;
    font-weight: 400;
    ${txtOflow.ell};
  }
`

export const Title = styled.h4`
  margin-bottom: 4px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
`

export const Description = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors['text-secondary']};
`
