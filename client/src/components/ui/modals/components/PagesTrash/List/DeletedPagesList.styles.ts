import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ isScrollOnBottom: boolean }>`
  width: 100%;
  height: calc(100% - 50px);
  padding: 6px 0;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)}px;
  }
`

export const Container = styled.ul`
  ${dFlex['center-col']};
`
