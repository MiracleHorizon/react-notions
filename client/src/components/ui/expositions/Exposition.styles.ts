import styled from 'styled-components'
import { dFlex, txtOflow } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex['center-col']};
  width: 100%;
  height: 200px;

  h4,
  h5 {
    width: 60%;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    ${txtOflow.ell};
  }
`

export const Title = styled.h4`
  font-weight: 500;
  letter-spacing: 0.6px;
  color: ${p => p.theme.colors['text-statuses-modal-title']};
`

export const Subtitle = styled.h5`
  margin-bottom: 10px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-secondary']};
`
