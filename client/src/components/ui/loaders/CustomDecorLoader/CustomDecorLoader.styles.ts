import styled from 'styled-components'
import { dFlex } from 'styles/variables'

const Container = styled.div<{ size: 'lg' | 'md' }>`
  ${dFlex.center};
  width: 100%;
  height: ${props => props.size === 'lg' ? 155 : 130}px;
`

export default Container
