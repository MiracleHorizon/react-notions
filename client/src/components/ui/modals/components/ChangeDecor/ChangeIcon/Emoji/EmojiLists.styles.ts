import styled from 'styled-components'
import { dFlex } from 'styles/variables'

const Wrapper = styled.div`
  ${dFlex.start};
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px);
  padding: 5px 12px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px !important;
  }
`

export default Wrapper
