import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AppState, { TCommentsFilter, PageView } from './app.types'
import appStateHandler from 'utils/AppStateHandler'
import { RootState } from 'store'

const initialState: AppState = {
  theme: appStateHandler.getTheme(),
  commonPagesLists: appStateHandler.getCommonPagesList(),
  favoritePagesLists: appStateHandler.getFavoritePagesList(),
  leftSidebar: appStateHandler.getLeftSidebar(),
  rightSidebar: appStateHandler.getRightSidebar(),
  selectedView: 'Board',
}

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setLightTheme(state) {
      state.theme = appStateHandler.lightTheme

      window.localStorage.setItem(
        'theme',
        JSON.stringify(appStateHandler.lightTheme)
      )
    },
    setDarkTheme(state) {
      state.theme = appStateHandler.darkTheme

      window.localStorage.setItem(
        'theme',
        JSON.stringify(appStateHandler.darkTheme)
      )
    },
    setSystemTheme(state) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      state.theme = isDark
        ? appStateHandler.darkTheme
        : appStateHandler.lightTheme
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

    setLeftSidebarWidth(state, action: PayloadAction<number>) {
      state.leftSidebar.width = action.payload
    },
    setRightSidebarWidth(state, action: PayloadAction<number>) {
      state.rightSidebar.width = action.payload
    },

    openLeftSidebar(state) {
      state.leftSidebar.isOpen = true
      window.localStorage.setItem('lSidebar', JSON.stringify(state.leftSidebar))
    },
    closeLeftSidebar(state) {
      state.leftSidebar.isOpen = false
      window.localStorage.setItem('lSidebar', JSON.stringify(state.leftSidebar))
    },
    closeRightSidebar(state) {
      state.rightSidebar.isOpen = false
      window.localStorage.setItem(
        'rSidebar',
        JSON.stringify(state.rightSidebar)
      )
    },

    toggleLeftSidebar(state) {
      state.leftSidebar.isOpen = !state.leftSidebar.isOpen
      window.localStorage.setItem('lSidebar', JSON.stringify(state.leftSidebar))
    },
    toggleRightSidebar(state) {
      state.rightSidebar.isOpen = !state.rightSidebar.isOpen
      window.localStorage.setItem(
        'rSidebar',
        JSON.stringify(state.rightSidebar)
      )
    },

    setView(state, action: PayloadAction<PageView>) {
      state.selectedView = action.payload
    },
    setCommentsFilter(state, action: PayloadAction<TCommentsFilter>) {
      state.rightSidebar.activeCommentsFilter = action.payload
      window.localStorage.setItem(
        'rSidebar',
        JSON.stringify(state.rightSidebar)
      )
    },
  },
})

export const {
  setLightTheme,
  setDarkTheme,
  setSystemTheme,
  toggleCommonPagesList,
  toggleFavoritePagesList,
  setLeftSidebarWidth,
  setRightSidebarWidth,
  openLeftSidebar,
  closeLeftSidebar,
  closeRightSidebar,
  toggleLeftSidebar,
  toggleRightSidebar,
  setView,
  setCommentsFilter,
} = appSlice.actions

export const selectActiveCommentsFilter = (state: RootState): TCommentsFilter =>
  state.app.rightSidebar.activeCommentsFilter

export default appSlice.reducer
