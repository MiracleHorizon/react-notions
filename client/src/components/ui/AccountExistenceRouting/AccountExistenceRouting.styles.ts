import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['end-center-col']};
  width: 100%;
  margin-top: 4px;
`

export const Container = styled.div`
  display: flex;
  margin-bottom: 4px;

  a,
  p {
    font-size: 12px;
  }

  a {
    color: rgb(46, 170, 220);
  }

  p {
    margin-right: 4px;
    color: rgba(55, 53, 47, 0.65);
  }
`
