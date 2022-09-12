import { useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

export default function useDebounceHovering(delay?: number) {
  const [isHovering, setHovering] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setHovering(true), delay ? delay : 350)
  }

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      setHovering(false)
    }
  }

  useEventListener('mouseenter', handleMouseEnter, ref)
  useEventListener('mouseleave', handleMouseLeave, ref)

  return {
    ref,
    isHovering,
    setHovering
  }
}
