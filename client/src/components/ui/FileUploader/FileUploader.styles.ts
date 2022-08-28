import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Container = styled.label`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  ${dFlex.center};
  width: 100%;
  height: 100%;

  input {
    display: none;
  }
`

export default Container
