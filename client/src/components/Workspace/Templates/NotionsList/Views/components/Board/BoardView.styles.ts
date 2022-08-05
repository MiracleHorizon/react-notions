import styled from 'styled-components'
import { mobile, tablet } from 'styles/variables'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin-bottom: 100px;
  padding: 10px 4px;

  @media (max-width: ${tablet}) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    padding: 0;
  }

  @media (max-width: ${mobile}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }
`

export default Container
