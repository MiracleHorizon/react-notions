import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-col']};
  
  a {
    text-decoration: none;
    color: rgb(46, 170, 220);
  }
`

export const Container = styled.div`
  ${dFlex.center};
`

export const Title = styled.span`
  align-self: center;
  margin-right: 5px;
`

export const LoginLink = styled.span`
  cursor: pointer;
  align-self: flex-end;
  font-size: 14px;
  color: rgb(46, 170, 220);
`
