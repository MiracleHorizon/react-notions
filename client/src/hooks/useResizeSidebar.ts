import { useCallback, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { useDeviceData } from 'react-device-detect'

import useActions from 'hooks/useActions'
import { TDivRef } from 'types'

export interface UseResizeParams {
  ref: TDivRef
  resizerRef: TDivRef
}

const SIDEBAR_WIDTH_RESTRICTIONS = {
  maxWidth: 400,
  minWidth: 180,
}

export default function useResizeSidebar({
  ref,
  resizerRef,
}: UseResizeParams): boolean {
  const { setSidebarWidth } = useActions()
  const [isResizingEnabled, setResizingEnabled] = useState<boolean>(false)
  const { maxWidth, minWidth } = SIDEBAR_WIDTH_RESTRICTIONS
  const { device } = useDeviceData('desktop')

  const startPosition = useRef<number>(0)
  const nodeRect = ref.current?.getBoundingClientRect()

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!resizerRef.current || !nodeRect) return

      if (e.composedPath().includes(resizerRef.current)) {
        e.preventDefault()

        setResizingEnabled(true)
        startPosition.current = nodeRect.x
      }
    },
    [nodeRect, resizerRef]
  )

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!resizerRef.current || !isResizingEnabled || !nodeRect) return
      const width = startPosition.current + e.clientX

      if (width <= maxWidth && width >= minWidth) {
        setSidebarWidth(width)
      }
    },
    [
      resizerRef,
      nodeRect,
      maxWidth,
      minWidth,
      isResizingEnabled,
      setSidebarWidth,
    ]
  )

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!resizerRef.current || !isResizingEnabled) return

      if (!e.composedPath().includes(resizerRef.current)) {
        setResizingEnabled(false)
      }

      setResizingEnabled(false)
    },
    [resizerRef, isResizingEnabled]
  )

  useEventListener('mousedown', onMouseDown)
  useEventListener('mousemove', onMouseMove)
  useEventListener('mouseup', onMouseUp)

  return isResizingEnabled
}
