import { SetState } from 'types'

interface Params<T extends HTMLElement> {
  node: T | null
  setScrollTop?: SetState<boolean>
  setScrollBottom?: SetState<boolean>
}

export default function handleScrollTop<T extends HTMLElement>({
  node,
  setScrollTop,
  setScrollBottom,
}: Params<T>) {
  if (!node) return

  if (setScrollTop) {
    setScrollTop(node.scrollTop === 0)
  }

  if (setScrollBottom) {
    setScrollBottom(node.scrollTop + node.offsetHeight === node.scrollHeight)
  }
}
