import { useEventListener } from 'usehooks-ts'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

type Handler = (event: MouseEvent) => void

const handleClickOutside = (
  node: HTMLDivElement | null,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
) => {
  useEventListener(mouseEvent, event => {
    const el = node

    if (!el || el.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}

export default function useOnCloseModal(
  ref: HTMLDivElement | null,
  action: ActionCreatorWithoutPayload | null
) {
  const handleKeydownClose = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && action) action()
  }

  const handleCloseModal = () => {
    if (action) action()
  }

  handleClickOutside(ref, handleCloseModal)

  useEventListener('keydown', handleKeydownClose)
}
