import { MutableRefObject } from 'react'
import { SetState } from 'types'

export default function handleScrollOffset(
  ref: MutableRefObject<HTMLDivElement | null>,
  setScrollOffset: SetState<boolean>
) {
  if (!ref.current) return
  setScrollOffset(ref.current.scrollTop > 0)
}
