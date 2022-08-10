import { KeyboardEvent, useRef } from 'react'
import { ContentEditableEvent } from 'react-contenteditable'

type TFunc = (value: string) => void

export default function useContentEditable(initialValue: string, func: TFunc) {
  const value = useRef<string>(initialValue)

  const handleChange = (e: ContentEditableEvent) => {
    value.current = e.target.value

    func(e.target.value)
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' && value.current !== initialValue) {
      e.preventDefault()
      func(value.current)
    }
  }

  const handleBlur = () => {
    if (value.current !== initialValue) func(value.current)
  }

  return {
    value: value.current,
    handleChange,
    handleEnterKey,
    handleBlur,
  }
}
