import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IPage from 'models/page/IPage'
import PagesState from './pages.types'

const initialState: PagesState = {
  pages: [],
  page: {} as IPage,
}

const pagesSlice = createSlice({
  name: 'pages',

  initialState,

  reducers: {
    setPages(state, action: PayloadAction<IPage[]>) {
      state.pages = action.payload
    },

    setCurrentPage(state, action: PayloadAction<IPage>) {
      state.page = action.payload
    },
  },
})

export const { setPages, setCurrentPage } = pagesSlice.actions

export default pagesSlice.reducer
