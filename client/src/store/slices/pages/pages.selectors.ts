import { RootState } from 'store'
import IPage from 'models/page/IPage'
import { _ } from 'react-hook-form/dist/__typetest__/__fixtures__'

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

export const selectedDependencies = (state: RootState, _id: string): IPage[] =>
  state.pages.pages.filter(
    page => page.parentPageId === _id && page.status === null
  )

export const selectMovablePages = (state: RootState, _id: string) => {
  return state.pages.pages.filter(
    page =>
      page._id !== _id && page.status === null && page.parentListId === null
  )
}

export const selectPagesByListId = (
  state: RootState,
  _id: string | undefined
) => {
  if (!_id) return []

  return state.pages.pages.filter(page => page.parentListId === _id)
}
