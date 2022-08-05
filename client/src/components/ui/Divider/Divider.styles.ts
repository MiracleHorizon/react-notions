import styled from 'styled-components'

const Line = styled.div`
  height: 1px;
  width: 100%;
  margin: 5px 0;
  background: ${props => props.theme.colors.divider};
`

export default Line
