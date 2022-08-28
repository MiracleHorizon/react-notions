import styled from 'styled-components'
import { txtOflow } from 'assets/styles/uiKit'

const Input = styled.input`
  min-width: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  font-size: 18px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};

  &::placeholder {
    font-weight: 400;
  }
`

export default Input
