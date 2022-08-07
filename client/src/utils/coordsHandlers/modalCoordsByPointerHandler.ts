import { ElementCoords, TClientRect } from 'types'

const modalCoordsByPointerHandler = (
  pointerCoords: ElementCoords,
  rect: TClientRect
): ElementCoords => {
  if (!pointerCoords.top || !pointerCoords.left || !rect) return {}

  const bodyHeight = document.body.offsetHeight
  const bodyWidth = document.body.offsetWidth

  let tPos = pointerCoords.top
  let lPos = pointerCoords.left

  if (tPos + rect.height + 10 > bodyHeight) {
    tPos = bodyHeight - rect.height - 10
  }

  if (lPos + rect.width + 5 > bodyWidth) {
    lPos = bodyWidth - rect.width - 10
  }

  return {
    top: tPos < 0 ? 5 : tPos,
    left: lPos < 0 ? 5 : lPos,
  }
}

export default modalCoordsByPointerHandler
