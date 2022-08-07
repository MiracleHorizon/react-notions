import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IPage from 'models/page/IPage'
import PagesState from './pages.types'

const initialState: PagesState = {
  pages: [],
  noStatusPages: [],
  page: null,
}

const pagesSlice = createSlice({
  name: 'pages',

  initialState,

  reducers: {
    setPages(state, action: PayloadAction<IPage[]>) {
      state.pages = action.payload
      // state.noStatusPages = action.payload.filter(page => page.status === 'NO_STATUS')
    },

    setCurrentPage(state, action: PayloadAction<IPage>) {
      state.page = action.payload
    },

    clearStore(state) {
      state.page = null
      state.pages = []
      state.noStatusPages = []
      window.localStorage.removeItem('lastVisitedPage')
    },
  },
})

export const { setPages, setCurrentPage, clearStore } = pagesSlice.actions

export default pagesSlice.reducer
