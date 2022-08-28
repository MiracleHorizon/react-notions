import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Wrapper = styled.div<{ isScrollOnBottom: boolean }>`
  ${dFlex['start-col']};
  width: 100%;
  height: calc(100% - 40px);
  padding: 5px 12px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)}px;
  }
`

export default Wrapper
