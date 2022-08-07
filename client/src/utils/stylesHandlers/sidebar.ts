interface Sizes {
  maxWidth: number
  minWidth: number
}

export const desktopSizes: Sizes = {
  maxWidth: 480,
  minWidth: 180,
}

export const tabletSizes: Sizes = {
  maxWidth: 400,
  minWidth: 140,
}

export const mobileSizes: Sizes = {
  maxWidth: 200,
  minWidth: 120,
}

export default class SidebarStylesHandler {
  static setMaxWidth(deviceType: string): number {
    switch (deviceType) {
      case 'tablet':
        return tabletSizes.maxWidth
      case 'mobile':
        return mobileSizes.maxWidth
      default:
        return desktopSizes.maxWidth
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
