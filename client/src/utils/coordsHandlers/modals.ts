import { RefObject } from 'react'
import { ElementCoords, TClientRect } from 'types'

type NodeRef = RefObject<HTMLDivElement>

export default class ModalsCoordsHandler {
  static rename(rect: TClientRect, invokerRect: string): ElementCoords {
    if (!rect || !invokerRect) return {}

    const invRect = invokerRect as unknown as DOMRect
    const bodyHeight = document.body.offsetHeight
    const bodyWidth = document.body.offsetWidth

    let lPos = invRect.left - invRect.width / 2 - rect.width / 2
    let tPos = invRect.bottom + 3

    if (lPos + rect.width + 5 > bodyWidth) {
      lPos = bodyWidth - rect.width - 10
    }

    if (tPos + rect.height + 10 > bodyHeight) {
      tPos = bodyHeight - rect.height - 10
    }

    return {
      left: lPos < 0 ? 10 : lPos,
      top: tPos < 0 ? 5 : tPos,
    }
  }

  static changeStatus(ref: NodeRef) {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.left,
    }
  }
}
