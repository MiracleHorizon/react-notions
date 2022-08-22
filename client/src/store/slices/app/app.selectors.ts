import { RootState } from 'store'

export const selectRedirectPageId = (state: RootState): string => {
  const lastPageId = state.app.lastPageId
  const favoritePages = state.pages.pages.filter(
    page =>
      page.favorite &&
      page.parentPageId === null &&
      page.parentListId === null &&
      page.status === null
  )
  const commonPages = state.pages.pages.filter(
    page =>
      !page.favorite &&
      page.parentPageId === null &&
      page.parentListId === null &&
      page.status === null
  )

  return lastPageId
    ? lastPageId
    : favoritePages[0]
    ? favoritePages[0]._id
    : commonPages[0]
    ? commonPages[0]._id
    : ''
}

export const selectPageSaveLoading = (state: RootState) => state.app.loadings.savePage
