import { ElementCoords } from 'types'
import { MouseEvent } from 'react'

export default interface CreateNewPageButtonProps {
  onClickAction: (() => void) | ((e: MouseEvent) => void)
  coords?: ElementCoords
  absolute?: boolean
}
