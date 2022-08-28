import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IPage from 'models/page/IPage'
import PagesState from './notions.types'

const initialState: PagesState = {
  pages: [],
  page: {} as IPage,
}

const notionsSlice = createSlice({
  name: 'notions',

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

export const { setPages, setCurrentPage } = notionsSlice.actions

export default notionsSlice.reducer
