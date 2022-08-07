import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px);
  padding: 5px 10px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 4px !important;
  }
`

export default Wrapper
