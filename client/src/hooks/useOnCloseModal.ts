import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { RefObject } from 'react'
import useClickOutside from './useClickOutside'

type Handler = (event: MouseEvent) => void

const useHandleClickOutside = (
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

// ref: HTMLDivElement | null | RefObject<HTMLDivElement>,
export default function useOnCloseModal(
  ref: HTMLDivElement | null,
  action: ActionCreatorWithoutPayload | null | (() => void)
) {
  const handleKeydownClose = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && action) action()
  }

  const handleCloseModal = () => {
    if (action) action()
  }

  useHandleClickOutside(ref, handleCloseModal)
  useEventListener('keydown', handleKeydownClose)

  // if (ref instanceof HTMLElement) {
  //   handleClickOutside(ref, handleCloseModal)
  // }

  // if (!ref) return
  //
  // useOnClickOutside(ref, handleCloseModal)
}
