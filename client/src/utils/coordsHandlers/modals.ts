import { RefObject } from 'react'

type NodeRef = RefObject<HTMLDivElement>

export default class ModalsCoordsHandler {
  static changeStatus(ref: NodeRef) {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.left,
    }
  }
}
