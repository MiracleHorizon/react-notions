import { RefObject } from 'react'
import { ElementCoords } from 'types'

export const DROPDOWN_POPUP_WIDTH = 200

export const dropdownCoordsHandler = (
  ref: RefObject<HTMLDivElement>,
  pos: 'center' | 'bottom'
): ElementCoords => {
  const rect = ref.current?.getBoundingClientRect()

  if (!rect) return {}

  let lPos = rect.right + 5

  if (lPos + DROPDOWN_POPUP_WIDTH > document.body.offsetWidth) {
    lPos = document.body.offsetWidth - DROPDOWN_POPUP_WIDTH - 10
  }

  return {
    top: pos === 'bottom' ? rect.bottom + 5 : rect.top - rect.height,
    left: lPos,
  }
}
