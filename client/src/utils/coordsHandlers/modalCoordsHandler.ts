import { ElementCoords, TClientRect } from 'types'

interface IDefaultParams {
  rect: TClientRect
  invokerRect: string
}

interface IPointerParams {
  rect: TClientRect
  pointerCoords?: ElementCoords
}

export default class ModalCoordsHandler {
  private static setCoordsByPointer({ rect, pointerCoords }: IPointerParams) {
    if (!pointerCoords || !pointerCoords.top || !pointerCoords.left || !rect) {
      return { pointer: {} }
    }

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
      pointer: {
        top: tPos < 0 ? 5 : tPos,
        left: lPos < 0 ? 5 : lPos,
      },
    }
  }

  private static setCoordsByXAxis({ rect, invokerRect }: IDefaultParams) {
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
    let tPosTop = invRect.top - rect.height + 10
    let tPosBottom = invRect.bottom + 10

    if (tPosTop + rect.height + 10 > bodyHeight) {
      tPosTop = bodyHeight - rect.height - 10
    }

    if (tPosBottom + rect.height + 10 > bodyHeight) {
      tPosBottom = bodyHeight - rect.height - 10
    }

    return {
      centerTop: {
        top: tPosTop < 0 ? 10 : tPosTop,
        left: lPos < 0 ? 10 : lPos,
      },
      centerBottom: {
        top: tPosBottom < 0 ? 10 : tPosBottom,
        left: lPos < 0 ? 10 : lPos,
      },
    }
  }

  private static setCoordsByYAxis({ rect, invokerRect }: IDefaultParams) {
    if (!rect || !invokerRect) return { leftCenter: {}, rightCenter: {} }

    const invRect = invokerRect as unknown as DOMRect
    const bodyWidth = document.body.offsetWidth
    const bodyHeight = document.body.offsetHeight

    let lPos = invRect.left - rect.width - 10
    let tPos = invRect.top + invRect.height / 2 - rect.height / 2
    let lPosRight = invRect.left + invRect.width + 10

    if (tPos + rect.height + 10 > bodyHeight) {
      tPos = bodyHeight - rect.height - 10
    }

    if (lPosRight + rect.width + 10 > bodyWidth) {
      lPosRight = bodyWidth - rect.width - 10
    }

    return {
      leftCenter: {
        top: tPos > 0 ? tPos : 10,
        left: lPos > 0 ? lPos : 10,
      },
      rightCenter: {
        top: tPos > 0 ? tPos : 10,
        left: lPosRight,
      },
    }
  }

  private static setRenameModalCoords({ rect, invokerRect }: IDefaultParams) {
    if (!rect || !invokerRect) return { rename: {} }

    const invRect = invokerRect as unknown as DOMRect
    const bodyHeight = document.body.offsetHeight
    const bodyWidth = document.body.offsetWidth

    let lPos = invRect.left - invRect.width / 2 - rect.width / 2
    let tPos = invRect.bottom + 3

    if (lPos + rect.width + 5 > bodyWidth) {
      lPos = bodyWidth - rect.width - 10
    }

    if (tPos + rect.height + 10 > bodyHeight) {
      tPos = bodyHeight - rect.height - 10
    }

    return {
      rename: {
        left: lPos < 0 ? 10 : lPos,
        top: tPos < 0 ? 5 : tPos,
      },
    }
  }

  public static setCoords = (
    rect: TClientRect,
    invokerRect: string,
    pointerCoords?: ElementCoords
  ) => ({
    ...this.setCoordsByPointer({ rect, pointerCoords }),
    ...this.setCoordsByXAxis({ rect, invokerRect }),
    ...this.setCoordsByYAxis({ rect, invokerRect }),
    ...this.setRenameModalCoords({ rect, invokerRect }),
  })
}
