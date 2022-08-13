import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const Content = styled.div`
  ${dFlex['center-start-col']};
  height: calc(100% - 45px);
  overflow: auto;
  scroll-behavior: smooth;
`

export default Content
