import { ElementCoords, TClientRect } from 'types'

const modalCoordsHandler = (rect: TClientRect, invokerRect: string) => {
  if (!rect || !invokerRect) return { centerTop: {}, centerBottom: {} }

  const invRect = invokerRect as unknown as DOMRect
  const bodyHeight = document.body.offsetHeight
  const bodyWidth = document.body.offsetWidth

  // Устанавливается и корректируется позиция по x - координате.
  // Модальное окно центруется по позиции элемента, который его вызывает.
  let lPos = invRect.left + invRect.width / 2 - rect.width / 2

  if (lPos + rect.width + 5 > bodyWidth) {
    lPos = bodyWidth - rect.width - 10
  }

  // Устанавливается и корректируется позиция по y - координате.
  // Создаются варианты позиционирования модального окна сверху и снизу от
  // элемента, который его вызывает.
  let tPosTop = invRect.top - rect.height + 3
  let tPosBottom = invRect.bottom + 3

  if (tPosTop + rect.height + 10 > bodyHeight) {
    tPosTop = bodyHeight - rect.height - 10
  }

  if (tPosBottom + rect.height + 10 > bodyHeight) {
    tPosBottom = bodyHeight - rect.height - 10
  }

  return {
    centerTop: {
      left: lPos < 0 ? 10 : lPos,
      top: tPosTop < 0 ? 5 : tPosTop,
    } as ElementCoords,
    centerBottom: {
      left: lPos < 0 ? 10 : lPos,
      top: tPosBottom < 0 ? 5 : tPosBottom,
    } as ElementCoords,
  }
}

export default modalCoordsHandler
