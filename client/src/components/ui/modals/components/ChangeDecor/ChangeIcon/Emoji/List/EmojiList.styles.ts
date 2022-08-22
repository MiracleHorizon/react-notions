import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['start-center-col']}
  width: 100%;
  height: auto;
  margin-top: 5px;
  margin-bottom: 10px;

  h4[data-el='modal-title'] {
    margin: 0 0 8px 0;
  }
`

export const Content = styled.div`
  ${dFlex['center-start']}
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`
