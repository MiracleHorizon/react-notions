import { useMemo, useRef, useState } from 'react'
import { ElementCoords } from 'types'
import ModalCoordsHandler from 'utils/ModalCoordsHandler'

type TPos =
  | 'centerBottom'
  | 'centerTop'
  | 'leftCenter'
  | 'rightCenter'
  | 'rightTop'
  | 'rightBottom'
  | 'pointer'
  | 'rename'
  | 'changeStatus'
  | 'resizeSb' // В enum

interface Params {
  pos: TPos
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
      case 'centerBottom':
        return modalCoords.centerBottom
      case 'centerTop':
        return modalCoords.centerTop
      case 'leftCenter':
        return modalCoords.leftCenter
      case 'rightCenter':
        return modalCoords.rightCenter
      case 'rightTop':
        return modalCoords.rightTop
      case 'rightBottom':
        return modalCoords.rightBottom
      case 'pointer':
        return modalCoords.pointer
      case 'rename':
        return modalCoords.rename
      case 'changeStatus':
        return modalCoords.changeStatus
      case 'resizeSb':
        return modalCoords.resizeSb
      default:
        throw new Error()
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos, rect.current, invokerRect, pointerCoords])

  return { ref, setRef, rect, coords }
}
