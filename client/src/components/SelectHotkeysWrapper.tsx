import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

const SelectHotkeysWrapper: FC<{ children: JSX.Element; items: any[] }> = ({
  children,
  items,
}) => {
  useEventListener('keydown', () => {})
  useEventListener('keydown', () => {})
  useEventListener('keydown', () => {})
  useEventListener('keydown', () => {})

  return <>{children}</>
}

export default SelectHotkeysWrapper
