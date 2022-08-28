import styled from 'styled-components'
import { dFlex, mobile, tablet, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  max-height: 60px;
  width: 100%;
  margin-bottom: 15px;
`

export const Container = styled.div`
  ${dFlex['center-start']}
  width: 100%;
  height: 24px;
`

export const Title = styled.h5`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-cover-titles']};
`

export const Email = styled.span`
  max-width: 400px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};

  @media (max-width: ${tablet}) {
    max-width: 250px;
  }

  @media (max-width: ${mobile}) {
    max-width: 150px;
  }
`
