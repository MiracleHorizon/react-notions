import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AppState, { PageView } from './app.types'
import AppStateHandler from 'utils/AppStateHandler'
import { lightTheme } from 'themes/light'
import { darkTheme } from 'themes/dark'

const initialState: AppState = {
  theme: AppStateHandler.getTheme(),
  sidebar: AppStateHandler.getSidebar(),
  commonPagesLists: AppStateHandler.getCommonPagesList(),
  favoritePagesLists: AppStateHandler.getFavoritePagesList(),
  selectedView: 'Board',
}

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setLightTheme(state) {
      state.theme = lightTheme
      window.localStorage.setItem('theme', JSON.stringify(lightTheme))
    },
    setDarkTheme(state) {
      state.theme = darkTheme
      window.localStorage.setItem('theme', JSON.stringify(darkTheme))
    },
    setSystemTheme(state) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      state.theme = isDark ? darkTheme : lightTheme
    },

    toggleCommonPagesList(state) {
      state.commonPagesLists.isOpen = !state.commonPagesLists.isOpen
      window.localStorage.setItem(
        'commonPagesList',
        JSON.stringify(state.commonPagesLists)
      )
    },
    toggleFavoritePagesList(state) {
      state.favoritePagesLists.isOpen = !state.favoritePagesLists.isOpen
      window.localStorage.setItem(
        'favoritePagesList',
        JSON.stringify(state.favoritePagesLists)
      )
    },

    setSidebarWidth(state, action: PayloadAction<number>) {
      state.sidebar.width = action.payload
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
      window.localStorage.setItem('lSidebar', JSON.stringify(state.sidebar))
    },

    setView(state, action: PayloadAction<PageView>) {
      state.selectedView = action.payload
    },
  },
})

export const {
  setLightTheme,
  setDarkTheme,
  setSystemTheme,
  toggleCommonPagesList,
  toggleFavoritePagesList,
  setSidebarWidth,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  setView,
} = appSlice.actions

export default appSlice.reducer
