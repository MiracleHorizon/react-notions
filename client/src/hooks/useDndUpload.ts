import { DragEvent } from 'react'
import { SetState } from 'types'

export default function useDndUpload(
  setDrag: SetState<boolean>,
  setFile: SetState<FileList | null>
) {
  const onDragStart = (e: DragEvent) => {
    e.preventDefault()
    setDrag(true)
  }

  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
    setDrag(true)
  }

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDrag(false)
    setFile(e.dataTransfer.files)
  }

  return {
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
  }
}
