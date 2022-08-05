import styled from 'styled-components'
import { dFlex } from 'styles/variables'

const Container = styled.div`
  flex: 1;
  ${dFlex.center};
  
  > span {
    margin-top: -100px;
  }
`

export default Container
