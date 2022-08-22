import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const INPUT_CONTAINER_Y_PADDING = 4

const Container = styled.div`
  position: absolute;
  top: calc(${INPUT_CONTAINER_Y_PADDING}px / -2);
  right: 6px;
  ${dFlex.center};
  width: 24px;
  height: 100%;
`

export default Container
