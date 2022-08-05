import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  width: 100%;
  height: auto;
  margin-bottom: 200px;
  padding-top: 16px;
`

export default Container
