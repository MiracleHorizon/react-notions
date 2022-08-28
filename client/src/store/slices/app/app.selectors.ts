import { RootState } from 'store'
import { NotionsSelector } from '../notions/notions.selectors'
import { StartOpenOptionEnum } from './app.types'

export const selectRedirectPageId = (state: RootState): string => {
  const lastPageId = state.app.lastPageId

  const favoritePages = NotionsSelector.selectFavoritePages(state)
  const commonPages = NotionsSelector.selectCommonPages(state)

  if (state.app.startOpen === StartOpenOptionEnum.LAST_PAGE) {
    return lastPageId
      ? lastPageId
      : favoritePages[0]
      ? favoritePages[0]._id
      : commonPages[0]
      ? commonPages[0]._id
      : ''
  } else {
    return favoritePages[0]
      ? favoritePages[0]._id
      : commonPages[0]
      ? commonPages[0]._id
      : ''
  }
}

export const selectPageSaveLoading = (state: RootState) =>
  state.app.loadings.savePage
