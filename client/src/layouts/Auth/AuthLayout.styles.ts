import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Layout = styled.div`
  position: relative;
  ${dFlex['center-start-col']};
  width: 100vw;
  height: 100vh;
  padding-top: 200px;

  div[data-el='red-error'] {
    width: 310px;
  }
`

export default Layout
