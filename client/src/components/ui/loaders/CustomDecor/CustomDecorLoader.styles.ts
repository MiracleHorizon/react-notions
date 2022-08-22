import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const Container = styled.div<{ size: 'lg' | 'md' }>`
  ${dFlex.center};
  width: 100%;
  height: ${p => p.size === 'lg' ? 155 : 130}px;
`

export default Container
