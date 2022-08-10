import styled from 'styled-components'
import { txtOflow } from 'styles/uiKit'

const Title = styled.h4<{ upCase?: boolean }>`
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
  user-select: none;
  font-size: ${props => (props.upCase ? 11 : 12)}px;
  font-weight: 500;
  ${txtOflow.ell};
  text-transform: ${props => (props.upCase ? 'uppercase' : 'none')};
  color: ${props => props.theme.colors['text-secondary']};
`

export default Title
