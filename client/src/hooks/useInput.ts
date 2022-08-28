import { useCallback, useState } from 'react'
import { InputEvent } from 'types'

export interface InputState {
  value: string
  handleChangeValue: (e: InputEvent) => void
  handleClearValue: () => void
}

export default function useInput(initialValue: string): InputState {
  const [value, setValue] = useState<string>(initialValue)

  return {
    value,
    handleChangeValue: (e: InputEvent) => setValue(e.target.value),
    handleClearValue: useCallback(() => setValue(''), []),
  }
}
