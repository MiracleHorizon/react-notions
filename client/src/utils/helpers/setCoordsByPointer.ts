import { MouseEvent } from 'react'
import { ElementCoords } from 'types'

const setCoordsByPointer = (e: MouseEvent): ElementCoords => ({
  top: e.clientY,
  left: e.clientX,
})

export default setCoordsByPointer
