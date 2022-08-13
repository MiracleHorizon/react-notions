import { MutableRefObject } from 'react'
import { SetState } from 'types'

export default function nodeRefHandler(
  node: HTMLDivElement | null,
  rect: MutableRefObject<DOMRect | null>,
  setRef: SetState<HTMLDivElement | null>
) {
  if (!node) return

  rect.current = node.getBoundingClientRect()
  setRef(node)
}
