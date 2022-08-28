import styled from 'styled-components'

const Container = styled.ul<{ isScrollOnBottom: boolean }>`
  min-height: 0;
  width: 100%;
  height: calc(100% - 48px);
  margin-bottom: 1px;
  padding: 4px;
  overflow: hidden auto;

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)}px;
  }
`

export default Container
