import styled from 'styled-components'
import { tablet } from 'styles/variables'

export const Wrapper = styled.div`
  min-width: 270px;
  max-width: 270px;
  width: 270px;
  height: auto;
  margin-right: 16px;
  user-select: none;

  @media (max-width: ${tablet}) {
    width: 250px;
    margin-right: 0;
  }

  @media (max-width: 850px) {
    width: 220px;
    margin-right: 0;
  }

  @media (max-width: 740px) {
    width: 200px;
  }
`

export const Content = styled.div`
  padding: 3px 2px;
`
