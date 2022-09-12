import { useMemo, useRef, useState } from 'react'
import { ElementCoords } from 'types'
import ModalCoordsHandler from 'utils/ModalCoordsHandler'

export enum ModalPosition {
  CENTER_BOTTOM = 'centerBottom',
  CENTER_TOP = 'centerTop',
  LEFT_CENTER = 'leftCenter',
  RIGHT_CENTER = 'rightCenter',
  RIGHT_TOP = 'rightTop',
  RIGHT_BOTTOM = 'rightBottom',
  POINTER = 'pointer',
  RENAME = 'rename',
  CHANGE_STATUS = 'changeStatus',
  RESIZER_SIDEBAR = 'resizeSb',
}

interface Params {
  pos: ModalPosition
  invokerRect?: string
  pointerCoords?: ElementCoords
}

export default function useSetModalPosition({
  invokerRect,
  pointerCoords,
  pos,
}: Params) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)

  const coords: ElementCoords = useMemo(() => {
    const modalCoords = ModalCoordsHandler.setCoords(
      rect.current,
      invokerRect ? invokerRect : JSON.stringify({}), // Если кто-то это читает, то прошу прощения за кровь из Ваших глаз...
      pointerCoords
    )

    switch (pos) {
      case ModalPosition.CENTER_BOTTOM:
        return modalCoords.centerBottom
      case ModalPosition.CENTER_TOP:
        return modalCoords.centerTop
      case ModalPosition.LEFT_CENTER:
        return modalCoords.leftCenter
      case ModalPosition.RIGHT_CENTER:
        return modalCoords.rightCenter
      case ModalPosition.RIGHT_TOP:
        return modalCoords.rightTop
      case ModalPosition.RIGHT_BOTTOM:
        return modalCoords.rightBottom
      case ModalPosition.POINTER:
        return modalCoords.pointer
      case ModalPosition.RENAME:
        return modalCoords.rename
      case ModalPosition.CHANGE_STATUS:
        return modalCoords.changeStatus
      case ModalPosition.RESIZER_SIDEBAR:
        return modalCoords.resizeSb
      default:
        throw new Error()
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos, rect.current, invokerRect, pointerCoords])

  return { ref, setRef, rect, coords }
}
