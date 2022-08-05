import styled from 'styled-components'
import { ElementCoords } from 'types'

const Button = styled.div<ElementCoords>`
  cursor: pointer;
  position: absolute;
  top: ${props => props.top}px;
  bottom: ${props => props.bottom}px;
  left: ${props => props.left}px;
  right: ${props => props.right}px;
`

export default Button
