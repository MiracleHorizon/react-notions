import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const Wrapper = styled.div`
  ${dFlex['center-start']}
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: ${p => p.theme.colors['b-shadow-cover-navbar']} 0px -1px 0px inset;
  user-select: none;
`

export default Wrapper
