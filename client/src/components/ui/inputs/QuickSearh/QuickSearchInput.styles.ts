import styled from 'styled-components'
import { txtOflow } from 'styles/uiKit'

const Input = styled.input`
  min-width: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  font-size: 18px;
  line-height: 24px;
  ${txtOflow.ell};

  &::placeholder {
    font-weight: 300;
  }
`

export default Input
