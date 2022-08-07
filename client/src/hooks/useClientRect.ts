import { useCallback, useState } from 'react'

type TResult = [DOMRect, (node: HTMLDivElement | null) => void]

export default function useClientRect() {
  const [rect, setRect] = useState<DOMRect | null>(null)

  const ref = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])

  return [rect, ref] as unknown as TResult
}
