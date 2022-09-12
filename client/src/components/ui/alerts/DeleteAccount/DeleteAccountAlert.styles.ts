import styled from 'styled-components'
import { alertBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div`
  width: 420px;
  margin: auto;
  padding: 24px 32px 16px;
  border-radius: 3px;
  box-shadow: ${p => alertBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-primary']};
`

export const Content = styled.div`
  h4 {
    font-weight: 400;
  }
  
  h4,
  p {
    color: ${p => p.theme.colors['text-primary']};
  }
`

export const AccountName = styled.span`
  display: block;
  margin: 16px 0;
  font-weight: 500;
  color: rgb(235, 87, 87); ;
`
