import { ElementCoords, TDivRef } from 'types'

// Сделать методы статическими

export class TooltipsCoordsHandler {
  pagesListTitle(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()
    const bodyHeight = document.body.offsetHeight

    if (!rect) return {}

    return {
      left: 3,
      bottom: bodyHeight - rect.top + 5,
    }
  }

  iconSb(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createPageSb(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createDepPage(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  createPageBoard(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 40,
    }
  }

  pageOptions(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  sidebarOption(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top - rect.height,
      left: rect.right + 8,
    }
  }

  pagesTrash(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top + 1.5,
      left: rect.right + 6,
    }
  }

  coverItem(ref: TDivRef) {}

  noStatusList(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.right - rect.width / 2,
      top: rect.bottom + 5,
    }
  }

  sbResizer(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.right + 5,
    }
  }

  // @IsRect()
  static closeSb(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.bottom + 5,
      left: rect.left + rect.width / 2,
    }
  }

  // @IsRect()
  static openSb(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      top: rect.top,
      left: rect.right + 10,
    }
  }

  // @IsRect()
  static switchTask(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.left + rect.width / 2,
      top: rect.top - rect.height * 2,
    }
  }

  // @IsRect()
  static clipboardCopy(ref: TDivRef): ElementCoords {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}

    return {
      left: rect.left + rect.width / 2,
      top: rect.top - rect.height - 6,
    }
  }
}

const tooltipsCoordsHandler = new TooltipsCoordsHandler()

function IsRect() {
  return function (ref: TDivRef) {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return {}
  }
}

export default tooltipsCoordsHandler
