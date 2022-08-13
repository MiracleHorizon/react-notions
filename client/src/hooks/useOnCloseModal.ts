import { useEventListener } from 'usehooks-ts'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

type Handler = (event: MouseEvent) => void

function useHandleClickOutside<T extends HTMLElement>(
  node: T | null,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
) {
  useEventListener(mouseEvent, event => {
    const el = node
    if (!el || el.contains(event.target as Node)) return
    handler(event)
  })
}

export default function useOnCloseModal<T extends HTMLElement>(
  ref: T | null,
  action: ActionCreatorWithoutPayload | null
) {
  const handleKeydownClose = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && action) action()
  }

  const handleCloseModal = () => {
    if (action) action()
  }

  useHandleClickOutside(ref, handleCloseModal)
  useEventListener('keydown', handleKeydownClose)
}
