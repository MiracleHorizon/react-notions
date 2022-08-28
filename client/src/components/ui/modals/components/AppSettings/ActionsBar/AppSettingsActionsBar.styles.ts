import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.footer`
  width: 100%;
  height: 64px;
  margin-top: 1px;
  padding: 10px 30px;
  box-shadow: ${p => p.theme.colors['b-shadow-divider']} 0px -1px 0px;
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  height: 100%;
  padding: 0 30px;

  div {
    margin: 0;
  }

  div[data-btn='filled'] {
    width: 70px;
    height: 32px;
    margin-right: 12px;
  }
  
  div[data-btn='outline'] {
    width: 66px;
  }
`
