import { RootState } from 'store'
import { IPage } from 'models/page/IPage'

export const selectFavoritePages = (state: RootState): IPage[] => {
  return state.pages.pages.filter(
    page =>
      page.favorite &&
      page.parentPageId === null &&
      page.parentListId === null &&
      page.status === null
  )
}

export const selectCommonPages = (state: RootState): IPage[] => {
  return state.pages.pages.filter(
    page =>
      !page.favorite &&
      page.parentPageId === null &&
      page.parentListId === null &&
      page.status === null
  )
}

export const selectNoStatusPages = (state: RootState) =>
  state.pages.pages.filter(page => page.status === 'NO_STATUS')

export const selectedDependencies = (state: RootState, id: string): IPage[] =>
  state.pages.pages.filter(
    page => page.parentPageId === id && page.status === null
  )

export const selectMovablePages = (state: RootState, id: string) => {
  return state.pages.pages.filter(
    page =>
      page._id !== id && page.status === null && page.parentListId === null
  )
}
