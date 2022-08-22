import { RootState } from 'store'
import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

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

export const selectNoStatusPages = (state: RootState) => {
  const noStatusList = state.tasksLists.tasksLists.find(
    list => list.color === TasksListTitleColorsEnum.EMPTY
  )

  if (!noStatusList) return []

  return state.pages.pages.filter(page => page.status === noStatusList._id)
}

export const selectPageDependencies = (
  state: RootState,
  _id: string
): IPage[] =>
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

export const selectParentPage = (
  state: RootState,
  parentPageId: string
): IPage | undefined => {
  return state.pages.pages.find(page => page._id === parentPageId)
}

export const selectPagesByListId = (
  state: RootState,
  _id: string | undefined
) => {
  if (!_id) return []

  return state.pages.pages.filter(page => page.parentListId === _id)
}

export const selectGalleryPages = (state: RootState) => {
  const currentPage = state.pages.page

  return state.pages.pages.filter(
    page => page.parentPageId === currentPage?._id && page.status !== null
  )
}

export const selectContentItemDeps = (
  state: RootState,
  _id: string
): INotionContentItem[] | [] => {
  const currentPage = state.pages.page
  const deps = currentPage?.content.filter(item => item.parentItemId === _id)

  return deps ? deps : []
}

export const selectFilteredTasks = (state: RootState, _id: string): IPage[] =>
  state.pages.pages.filter(page => page.parentListId === _id) // В страницы.
