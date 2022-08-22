import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  margin-bottom: 2px;
  padding: 5px 5px 0 5px;

  h4[data-el='modal-title'] {
    margin: 5px 0 5px 7px;
  }
`

export const List = styled.ul`
  ${dFlex.center};
`
