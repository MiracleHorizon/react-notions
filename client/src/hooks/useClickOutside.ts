import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { RefObject } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type DispatchActions =
  | ActionCreatorWithoutPayload
  | ActionCreatorWithoutPayload[]
  | null

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  actions: DispatchActions
) {
  const handleClickOutside = () => {
    if (!actions) return

    Array.isArray(actions) ? actions.forEach(action => action()) : actions()
  }

  useOnClickOutside(ref, handleClickOutside)
}
