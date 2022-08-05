import styled from 'styled-components'
import { dFlex } from 'styles/variables'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${dFlex['start-center']};
  width: 100vw;
  height: 100vh;
`

export default Container
