import styled from 'styled-components'

const Wrapper = styled.div<{ isOnBottom: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px);
  padding: 5px 10px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isOnBottom ? 4 : 0)}px;
  }
`

export default Wrapper
