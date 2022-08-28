import styled from 'styled-components'
import { txtOflow } from 'assets/styles/uiKit'

const Title = styled.h4<{ upCase?: boolean }>`
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
  user-select: none;
  font-size: ${p => (p.upCase ? 11 : 12)}px;
  font-weight: 500;
  ${txtOflow.ell};
  text-transform: ${p => (p.upCase ? 'uppercase' : 'none')};
  color: ${p => p.theme.colors['text-secondary']};
`

export default Title
