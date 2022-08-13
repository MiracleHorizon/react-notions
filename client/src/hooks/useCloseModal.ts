import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { RefObject } from 'react'

export default function useCloseModal<T extends HTMLElement>(
  ref: RefObject<T>,
  action: ActionCreatorWithoutPayload | null
) {
  const handleKeydownClose = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && action) action()
  }

  const handleCloseModal = () => {
    if (action) action()
  }

  useEventListener('keydown', handleKeydownClose)
  useOnClickOutside(ref, handleCloseModal)
}
