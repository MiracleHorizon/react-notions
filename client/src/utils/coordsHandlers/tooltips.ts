import { RefObject } from 'react'
import { ElementCoords } from 'types'

type NodeRef = RefObject<HTMLDivElement>

// Сделать методы статическими

export class TooltipsCoordsHandler {
  pagesListTitle(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()
    const bodyHeight = document.body.offsetHeight

    if (!rect) return {}

    return {
      left: 3,
      bottom: bodyHeight - rect.top + 5,
    }
  }

  iconSb(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createPageSb(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createDepPage(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createPageBoard(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 40,
    }
  }

  pageOptions(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  sidebarOption(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top - rect.height,
      left: rect.right + 8,
    }
  }

  pagesTrash(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top + 1.5,
      left: rect.right + 6,
    }
  }

  coverItem(ref: NodeRef) {}

  noStatusList(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  sbResizer(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.right + 5,
    }
  }

  // @IsRect()
  static closeSb(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.bottom + 5,
      left: rect.left + rect.width / 2,
    }
  }

  // @IsRect()
  static openSb(ref: NodeRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.right + 10,
    }
  }
}

const tooltipsCoordsHandler = new TooltipsCoordsHandler()

function IsRect() {
  return function (ref: NodeRef) {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}
  }
}

export default tooltipsCoordsHandler
