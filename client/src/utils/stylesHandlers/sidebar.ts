interface ISidebarSizes {
  maxWidth: number
  minWidth: number
}

export const SIDEBAR_DESKTOP_SIZER: ISidebarSizes = {
  maxWidth: 480,
  minWidth: 180,
}

export const SIDEBAR_TABLET_SIZER: ISidebarSizes = {
  maxWidth: 400,
  minWidth: 140,
}

export const SIDEBAR_MOBILE_SIZER: ISidebarSizes = {
  maxWidth: 200,
  minWidth: 120,
}

export default class SidebarStylesHandler {
  static setMaxWidth(deviceType: string): number {
    switch (deviceType) {
      case 'tablet':
        return SIDEBAR_TABLET_SIZER.maxWidth
      case 'mobile':
        return SIDEBAR_MOBILE_SIZER.maxWidth
      default:
        return SIDEBAR_DESKTOP_SIZER.maxWidth
    }
  }

  static setToggleButtonParams(dest: 'open' | 'close') {
    let [position, rotate, coords] = ['relative', 180, `{ left: 0px; top: 0px }`]

    if (dest === 'close') {
      position = 'absolute'
      rotate = 0
      coords = `
        top: 12px;
        right: 14px;
      `
    }

    return `
      position: ${position};
      ${coords};
      
      svg {
        transform: rotate(${rotate}deg);
      }
    `
  }
}
