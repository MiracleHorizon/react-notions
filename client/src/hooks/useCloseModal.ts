import { RefObject } from 'react'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { useEventListener } from 'usehooks-ts'
import useClickOutside from './useClickOutside'

export default function useCloseModal(
  ref: RefObject<HTMLDivElement>,
  action: ActionCreatorWithoutPayload | null
) {
  const handleKeydownClose = (e: KeyboardEvent) => {
    if (e.code === 'Escape' && action) action()
  }

  useClickOutside(ref, action)

  useEventListener('keydown', handleKeydownClose)
}
