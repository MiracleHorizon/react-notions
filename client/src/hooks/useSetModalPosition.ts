import { useMemo, useRef, useState } from 'react'
import { ElementCoords } from 'types'
import ModalCoordsHandler from 'utils/ModalCoordsHandler'

type TPos =
  | 'centerBottom'
  | 'centerTop'
  | 'leftCenter'
  | 'rightCenter'
  | 'pointer'
  | 'rename'
  | 'createNotionItem'
  | 'changeStatus'

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
      case 'pointer':
        return modalCoords.pointer
      case 'rename':
        return modalCoords.rename
      case 'changeStatus':
        return modalCoords.changeStatus
      default:
        throw new Error()
    }
  }, [rect.current, invokerRect])

  return { ref, setRef, rect, coords }
}
