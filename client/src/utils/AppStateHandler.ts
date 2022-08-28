import AppState, {
  PagesListState,
  PageView,
  SidebarState,
  StartOpenOptionEnum,
  ThemeState,
} from 'store/slices/app/app.types'
import { Theme } from 'themes/theme.model'
import { lightTheme } from 'themes/light'
import { darkTheme } from 'themes/dark'

const DEFAULT_SIDEBAR_STATE = {
  isOpen: true,
  width: 300,
}

export default class AppStateHandler {
  private static getTheme(): ThemeState {
    const themeStateJson = window.localStorage.getItem('themeState')

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultThemeState = {
      theme: isDark ? darkTheme : lightTheme,
      title: Theme.SYSTEM,
    }

    if (themeStateJson) {
      const theme: ThemeState = JSON.parse(themeStateJson)

      if (theme.title === Theme.SYSTEM) {
        theme.theme = isDark ? darkTheme : lightTheme
      }

      return theme
    }

    window.localStorage.setItem('themeState', JSON.stringify(defaultThemeState))
    return defaultThemeState
  }

  private static getSidebarState(): SidebarState {
    const sbJsonData = window.localStorage.getItem('sidebar')
    return sbJsonData ? JSON.parse(sbJsonData) : DEFAULT_SIDEBAR_STATE
  }

  private static getFavoritePagesListState(): PagesListState {
    const listJson = window.localStorage.getItem('favoritePagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }

  private static getCommonPagesListState(): PagesListState {
    const listJson = window.localStorage.getItem('commonPagesList')
    return listJson ? JSON.parse(listJson) : { isOpen: true }
  }

  private static getStartOpenOption(): StartOpenOptionEnum {
    const optionJson = window.localStorage.getItem('startOpen')

    return optionJson
      ? JSON.parse(optionJson)
      : StartOpenOptionEnum.TOP_SIDEBAR_PAGE
  }

  private static getLastPageId(): string | null {
    const lastPageId = window.localStorage.getItem('lastPageId')
    return lastPageId ? lastPageId : null
  }

  public static getAppState = (): AppState => ({
    themeState: AppStateHandler.getTheme(),
    startOpen: AppStateHandler.getStartOpenOption(),
    lastPageId: AppStateHandler.getLastPageId(),
    selectedView: 'Board' as PageView,
    loadings: { savePage: false },
    sidebar: AppStateHandler.getSidebarState(),
    favoritePagesLists: AppStateHandler.getFavoritePagesListState(),
    commonPagesLists: AppStateHandler.getCommonPagesListState(),
  })
}
