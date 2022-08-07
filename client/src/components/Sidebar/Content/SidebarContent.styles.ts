import styled from 'styled-components'

const Content = styled.div<{ topIndent?: boolean }>`
  position: relative;
  ${props => props.topIndent && 'top: 35px'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 4px;
`

export default Content
