import styled from 'styled-components'
import { dFlex } from 'styles/variables'

const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 16px;
  height: 16px;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 1px;
  }
`

export default Container
