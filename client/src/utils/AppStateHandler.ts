import { PagesListState, SidebarState } from 'store/slices/app/app.types'
import { lightTheme } from 'themes/light'
import ITheme from 'themes/theme.model'

const defaultSidebarState = {
  isOpen: true,
  width: 300,
}

export default class AppStateHandler {
  static getTheme(): ITheme {
    const themeJson = window.localStorage.getItem('theme')
    return themeJson ? JSON.parse(themeJson) : lightTheme
  }

  static getSidebar(): SidebarState {
    const sidebarJsonData = window.localStorage.getItem('sidebar')
    return sidebarJsonData ? JSON.parse(sidebarJsonData) : defaultSidebarState
  }

  static getFavoritePagesList(): PagesListState {
    const listJson = window.localStorage.getItem('favoritePagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }

  static getCommonPagesList(): PagesListState {
    const listJson = window.localStorage.getItem('commonPagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }
}
