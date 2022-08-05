import styled from 'styled-components'
import { txtOflow } from 'styles/variables'

const Title = styled.span`
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
  user-select: none;
  font-size: 12px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-secondary']};
`

export default Title
