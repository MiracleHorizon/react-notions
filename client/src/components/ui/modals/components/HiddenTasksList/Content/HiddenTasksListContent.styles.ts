import styled from 'styled-components'

const Container = styled.div<{ isScrollOnBottom: boolean }>`
  max-height: calc(50vh - 100px);
  width: 100%;
  margin-top: 4px;
  padding: 5px 10px 8px 10px;
  overflow: auto;

  h6[data-el='def-no-res-exp'] {
    margin-top: 0;
    margin-bottom: 6px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 4 : 0)}px;
  }
`

export default Container
