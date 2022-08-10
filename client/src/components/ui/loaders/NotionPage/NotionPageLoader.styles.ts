import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const Container = styled.div`
  ${dFlex.center};
  width: 100%;
  height: calc(100vh - 45px);
  
  > span {
    margin-top: -100px;
  }
`

export default Container
