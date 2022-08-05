import {
  PagesListState,
  RightSidebarState,
  SidebarState,
} from 'store/slices/app/app.types'
import { ITheme } from 'themes/theme.model'
import { lightTheme } from 'themes/light'
import { darkTheme } from 'themes/dark'

export class AppStateHandler {
  constructor(
    public lightTheme: ITheme,
    public darkTheme: ITheme,
    private leftSidebar: SidebarState,
    private rightSidebar: RightSidebarState
  ) {}

  getTheme(): ITheme {
    const themeJson = window.localStorage.getItem('theme')
    return themeJson ? JSON.parse(themeJson) : this.lightTheme
  }

  getLeftSidebar(): SidebarState {
    const sidebarJsonData = window.localStorage.getItem('lSidebar')
    return sidebarJsonData ? JSON.parse(sidebarJsonData) : this.leftSidebar
  }

  getRightSidebar(): RightSidebarState {
    const sidebarJsonData = window.localStorage.getItem('rSidebar')
    return sidebarJsonData ? JSON.parse(sidebarJsonData) : this.rightSidebar
  }

  getCommonPagesList(): PagesListState {
    const listJson = window.localStorage.getItem('commonPagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }

  getFavoritePagesList(): PagesListState {
    const listJson = window.localStorage.getItem('favoritePagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }
}

const appStateHandler = new AppStateHandler(
  lightTheme,
  darkTheme,
  {
    width: 300,
    isOpen: true,
    location: 'left',
  },
  {
    width: 380,
    isOpen: false,
    location: 'right',
    activeCommentsFilter: 'Open',
  }
)

export default appStateHandler
