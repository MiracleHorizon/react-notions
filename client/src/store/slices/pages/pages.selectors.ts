import { RootState } from 'store'
import IPage from 'models/page/IPage'
import INotionContentItem from '../../../models/pageContent/INotionContentItem'

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

export const selectListDependencies = (state: RootState, listId: string) => {
  return state.pages.pages.filter(page => page.parentListId === listId)
}

export const selectListTasks = (state: RootState, listId: string) => {
  return state.pages.pages
    .filter(page => page.parentListId === listId)
    .sort((a, b) => a.taskOrder! - b.taskOrder!)
}

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

export const selectPageById = (
  state: RootState,
  _id: string | null
): IPage | null | undefined => {
  if (!_id) return null
  return state.pages.pages.find(page => page._id === _id)
}

export const selectGalleryPages = (state: RootState) => {
  const currentPage = state.pages.page

  return state.pages.pages.filter(
    page => page.parentPageId === currentPage?._id && page.status !== null
  )
}

export const selectCurrentPage = (state: RootState): IPage | null => {
  return state.pages.page
}

export const selectContentItemDeps = (
  state: RootState,
  _id: string
): INotionContentItem[] | [] => {
  const currentPage = state.pages.page
  const deps = currentPage?.content.filter(item => item.parentItemId === _id)

  return deps ? deps : []
}
