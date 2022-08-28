import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Content = styled.div`
  cursor: text;
  ${dFlex['center-start-col']};
  width: 100%;
  height: calc(100% - 45px);
  overflow: auto;
  scroll-behavior: smooth;
`

export default Content
