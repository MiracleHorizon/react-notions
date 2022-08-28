import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AppState, {
  PageView,
  StartOpenOptionEnum,
  ThemeState,
} from './app.types'
import AppStateHandler from 'utils/AppStateHandler'
import { Theme } from 'themes/theme.model'
import { lightTheme } from 'themes/light'
import { darkTheme } from 'themes/dark'

const initialState: AppState = AppStateHandler.getAppState()

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const themeState = {} as ThemeState

      switch (action.payload) {
        case Theme.LIGHT:
          themeState.theme = lightTheme
          themeState.title = Theme.LIGHT
          break
        case Theme.DARK:
          themeState.theme = darkTheme
          themeState.title = Theme.DARK
          break
        case Theme.SYSTEM:
          themeState.theme = isDark ? darkTheme : lightTheme
          themeState.title = Theme.SYSTEM
          break
      }

      state.themeState = themeState
      window.localStorage.setItem('themeState', JSON.stringify(themeState))
    },
    setStartOpenOption(state, action: PayloadAction<StartOpenOptionEnum>) {
      state.startOpen = action.payload
      window.localStorage.setItem('startOpen', JSON.stringify(state.startOpen))
    },
    setNotionsDatabaseView(state, action: PayloadAction<PageView>) {
      state.selectedView = action.payload
    },
    setSavePageLoading(state, action: PayloadAction<boolean>) {
      state.loadings.savePage = action.payload
    },

    setSidebarWidth(state, action: PayloadAction<number>) {
      state.sidebar.width = action.payload
      window.localStorage.setItem('sidebar', JSON.stringify(state.sidebar))
    },
    openSidebar(state) {
      state.sidebar.isOpen = true
      window.localStorage.setItem('sidebar', JSON.stringify(state.sidebar))
    },
    closeSidebar(state) {
      state.sidebar.isOpen = false
      window.localStorage.setItem('sidebar', JSON.stringify(state.sidebar))
    },
    toggleSidebar(state) {
      state.sidebar.isOpen = !state.sidebar.isOpen
      window.localStorage.setItem('sidebar', JSON.stringify(state.sidebar))
    },

    toggleFavoritePagesList(state) {
      state.favoritePagesLists.isOpen = !state.favoritePagesLists.isOpen
      window.localStorage.setItem(
        'favoritePagesList',
        JSON.stringify(state.favoritePagesLists)
      )
    },
    toggleCommonPagesList(state) {
      state.commonPagesLists.isOpen = !state.commonPagesLists.isOpen
      window.localStorage.setItem(
        'commonPagesList',
        JSON.stringify(state.commonPagesLists)
      )
    },
  },
})

export const {
  setTheme,
  setStartOpenOption,
  toggleCommonPagesList,
  toggleFavoritePagesList,
  setSidebarWidth,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  setNotionsDatabaseView,
  setSavePageLoading,
} = appSlice.actions

export default appSlice.reducer
