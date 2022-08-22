import { SetState } from 'types'

interface Params<T extends HTMLElement> {
  node: T | null
  setOnTop?: SetState<boolean>
  setOnBottom?: SetState<boolean>
}

export default function handleScrollTop<T extends HTMLElement>({
  node,
  setOnTop,
  setOnBottom,
}: Params<T>) {
  if (!node) return

  if (setOnTop) {
    setOnTop(node.scrollTop === 0)
  }

  if (setOnBottom) {
    setOnBottom(node.scrollTop + node.offsetHeight === node.scrollHeight)
  }
}
