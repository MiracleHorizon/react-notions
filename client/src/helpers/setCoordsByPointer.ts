import { MouseEvent } from 'react'
import { ElementCoords } from 'types'

export const setCoordsByPointer = (e: MouseEvent): ElementCoords => ({
  top: e.clientY,
  left: e.clientX ,
})
