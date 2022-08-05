import { TToggleButtonDest } from 'components/ui/buttons/ToggleSidebar/ToggleSidebarButton.types'
import { SidebarWrapperProps } from 'components/Sidebar/Sidebar.types'
import { SidebarLocation } from 'store/slices/app/app.types'
import { ITheme, Theme } from 'themes/theme.model'

interface Sizes {
  left: {
    maxWidth: number
    minWidth: number
  }
  right: {
    maxWidth: number
    minWidth: number
  }
}

interface SidebarsSizes {
  desktop: Sizes
  tablet: Sizes
  mobile: Sizes
}

export class SidebarStylesHandler {
  constructor(private sidebarSizes: SidebarsSizes) {}

  setPosition(location: SidebarLocation, isOpen: boolean): string {
    // return !isOpen || location === 'right' ? 'absolute' : 'relative'
    return !isOpen ? 'absolute' : 'relative'
  }

  setMaxWidth(props: SidebarWrapperProps): number {
    const { location, deviceType } = props

    if (location === 'left') {
      switch (deviceType) {
        case 'tablet':
          return this.sidebarSizes.tablet.left.maxWidth
        case 'mobile':
          return this.sidebarSizes.mobile.left.maxWidth
        default:
          return this.sidebarSizes.desktop.left.maxWidth
      }
    } else {
      switch (deviceType) {
        case 'tablet':
          return this.sidebarSizes.tablet.right.maxWidth
        case 'mobile':
          return this.sidebarSizes.mobile.right.maxWidth
        default:
          return this.sidebarSizes.desktop.right.maxWidth
      }
    }
  }

  setMinWidth(props: SidebarWrapperProps): number {
    const { isOpen, location, deviceType } = props

    if (!isOpen) return 0

    if (location === 'left') {
      switch (deviceType) {
        case 'tablet':
          return this.sidebarSizes.tablet.left.minWidth
        case 'mobile':
          return this.sidebarSizes.mobile.left.minWidth
        default:
          return this.sidebarSizes.desktop.left.minWidth
      }
    } else {
      switch (deviceType) {
        case 'tablet':
          return this.sidebarSizes.tablet.right.minWidth
        case 'mobile':
          return this.sidebarSizes.mobile.right.minWidth
        default:
          return this.sidebarSizes.desktop.right.minWidth
      }
    }
  }

  static setBorder = (location: SidebarLocation, theme: ITheme): string =>
    location === 'right'
      ? `border-left: 1px solid ${
          theme.identifier === Theme.LIGHT
            ? 'rgba(55, 53, 47, 0.09)'
            : 'rgba(255, 255, 255, 0.094)'
        }`
      : `border-right: 1px solid ${
          theme.identifier === Theme.LIGHT
            ? 'rgba(55, 53, 47, 0.09)'
            : 'rgba(255, 255, 255, 0.094)'
        }`

  setBackground(props: SidebarWrapperProps, theme: ITheme): string {
    const { location } = props

    return location === 'right'
      ? theme.colors['bg-r-sidebar']
      : theme.colors['bg-l-sidebar']
  }

  setTranslateX(props: SidebarWrapperProps): number {
    const { isOpen, location, width } = props

    return !isOpen ? (location === 'left' ? -width - 10 : width + 10) : 0
  }

  setBoxShadow = (props: SidebarWrapperProps, theme: ITheme) =>
    props.isResizerHovering || props.isResizingEnabled
      ? `${theme.colors['b-shadow-sb-resizer']} -2px 0px 0px inset`
      : 'none'

  setToggleButtonParams(dest: TToggleButtonDest) {
    let position: string = 'relative',
      rotate: number = 0,
      coords: string = `
          top: 10px;
          left: 10px;
        `

    switch (dest) {
      case 'lOpen': {
        rotate = 180
        coords = `
          top: 11px;
          left: 10px;
        `
        break
      }
      case 'lClose': {
        position = 'absolute'
        coords = `
          top: 12px;
          right: 10px;
        `
        break
      }
      case 'rClose': {
        rotate = 180
        position = 'absolute'
        break
      }
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

export const desktopSizes: Sizes = {
  left: { maxWidth: 480, minWidth: 180 },
  right: { maxWidth: 480, minWidth: 385 },
}

export const tabletSizes: Sizes = {
  left: { maxWidth: 400, minWidth: 140 },
  right: { maxWidth: 400, minWidth: 300 },
}

export const mobileSizes: Sizes = {
  left: { maxWidth: 200, minWidth: 120 },
  right: { maxWidth: 200, minWidth: 170 },
}

const sidebarStylesHandler = new SidebarStylesHandler({
  desktop: desktopSizes,
  tablet: tabletSizes,
  mobile: mobileSizes,
})

export default sidebarStylesHandler
