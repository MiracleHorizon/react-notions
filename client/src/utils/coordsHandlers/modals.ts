import { ElementCoords } from 'types'
import { RefObject } from 'react'

type NodeRef = RefObject<HTMLDivElement>

class ModalsCoordsHandler {
  renamePage(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    let lPos = rect.left - 40
    if (lPos < 0) lPos = rect.left

    return {
      left: lPos,
      top: rect.bottom + 5,
    }
  }

  icon(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}
    // let lPos = rect.left + rect.width / 2
    // if (rect.left - rect.width < 0) lPos = 10

    return {
      left: rect.left + rect.width / 2,
      top: rect.bottom + 10,
    }
  }

  cover(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()
    const bodyHeight = document.body.offsetHeight

    if (!rect) return {}

    let tPos = rect.bottom + 5
    if (tPos >= bodyHeight) {
    }

    return {
      left: rect.left + rect.width / 2,
      top: tPos,
    }
  }

  pageSettings(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      right: document.body.offsetWidth - rect.right + 5,
      top: rect.bottom,
    }
  }

  tasksListOptions(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  handleTasksListTitle(ref: NodeRef): ElementCoords {
    const MODAL_WIDTH = 300
    const bodyWidth = document.body.offsetWidth
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    let lPos = rect.right - rect.width / 2
    if (lPos - MODAL_WIDTH / 2 < 0) lPos = MODAL_WIDTH / 2 + 10
    if (lPos + MODAL_WIDTH / 2 > bodyWidth) lPos = bodyWidth - MODAL_WIDTH - 10

    return {
      left: lPos,
      top: rect.bottom + 2,
    }
  }

  hiddenTasksList(ref: NodeRef): ElementCoords {
    const MODAL_WIDTH = 300
    const MODAL_MAX_HEIGHT = (document.body.offsetHeight / 100) * 70
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    let lPos = rect.left + rect.width / 2

    if (lPos + MODAL_WIDTH + 5 >= document.body.offsetWidth) {
      lPos = document.body.offsetWidth - MODAL_WIDTH - 5
    }

    return {
      left: lPos,
      top: rect.bottom + 2,
    }
  }
}

export const modalsCoordsHandler = new ModalsCoordsHandler()
