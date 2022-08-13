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
    let position: string = 'relative',
      rotate: number = 0,
      coords: string

    if (dest === 'open') {
      rotate = 180
      coords = `
          top: 11px;
          left: 10px;
        `
    } else {
      position = 'absolute'
      coords = `
          top: 12px;
          right: 10px;
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
