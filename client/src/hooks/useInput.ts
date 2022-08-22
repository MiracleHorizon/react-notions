import { useCallback, useState } from 'react'
import { InputEvent } from 'types'

export default function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue)

  return {
    value,
    handleChangeValue: (e: InputEvent) => setValue(e.target.value),
    handleClearValue: useCallback(() => setValue(''), []),
  }
}
