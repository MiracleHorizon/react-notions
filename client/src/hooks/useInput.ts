import { useCallback, useState } from 'react'
import { InputEvent } from 'types'

export default function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue)

  const handleChangeValue = useCallback(
    (e: InputEvent) => setValue(e.target.value),
    []
  )

  const handleClearValue = useCallback(() => setValue(''), [])

  return {
    value,
    handleChangeValue,
    handleClearValue,
  }
}
